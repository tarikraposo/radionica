"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Carrega a preferência de áudio do usuário se existir
  useEffect(() => {
    const savedMute = localStorage.getItem("audioMuted");
    if (savedMute !== null) {
      setIsMuted(savedMute === "true");
    }
  }, []);

  // Gerencia a reprodução e as tentativas de autoplay
  useEffect(() => {
    if (!audioRef.current) return;

    // Salva a escolha do usuário
    localStorage.setItem("audioMuted", isMuted.toString());

    audioRef.current.volume = 0.05; // Volume bem baixo (5%)

    if (isMuted) {
      audioRef.current.pause();
    } else {
      // Tenta tocar imediatamente
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Bloqueado pelo navegador!
          // Vamos esperar por QUALQUER clique ou tecla na página toda
          const startOnInteraction = () => {
            if (audioRef.current && !isMuted) {
              audioRef.current
                .play()
                .then(() => {
                  // Deu certo! Removemos os ouvintes
                  document.removeEventListener("click", startOnInteraction);
                  document.removeEventListener("keydown", startOnInteraction);
                  document.removeEventListener(
                    "touchstart",
                    startOnInteraction,
                  );
                })
                .catch(() => {});
            }
          };

          document.addEventListener("click", startOnInteraction);
          document.addEventListener("keydown", startOnInteraction);
          document.addEventListener("touchstart", startOnInteraction);
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audio/noria_sound.mp3" loop preload="auto" />
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
