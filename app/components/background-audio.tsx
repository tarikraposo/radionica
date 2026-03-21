"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Volume bem mais baixo (10%) para som ambiente sutil

      // Tentar iniciar o áudio (pode ser bloqueado pelo navegador até interação)
      const playAudio = async () => {
        try {
          if (!isMuted) {
            await audioRef.current?.play();
          }
        } catch (error) {
          console.log("Autoplay blocked or audio error:", error);
        }
      };

      if (!isMuted) {
        playAudio();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
