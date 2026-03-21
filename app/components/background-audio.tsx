"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // Volume bem baixo (5%) para som ambiente sutil
    }

    const handleInteraction = () => {
      if (audioRef.current && !isMuted) {
        audioRef.current
          .play()
          .then(() => {
            setHasInteracted(true);
            // Uma vez que tocou, removemos os listeners de interação global
            cleanup();
          })
          .catch((error) => {
            console.log("Ainda bloqueado pelo navegador:", error);
          });
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    // Adiciona listeners para qualquer interação do usuário na página
    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return cleanup;
  }, [hasInteracted, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play().catch(() => {
          // Silenciosamente falha se o autoplay ainda estiver bloqueado
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Se o usuário clicar manualmente no botão, consideramos como interação
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/audio/noria_sound.mp3"
        loop
        preload="auto"
        autoPlay={!isMuted}
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg hover:bg-background transition-all duration-300"
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Volume2 className="h-5 w-5 text-primary animate-pulse" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isMuted ? "Ativar som ambiente" : "Silenciar som ambiente"}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
