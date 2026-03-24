"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

export function BackgroundAudio() {
  const [isMuted, setIsMuted, hydrated] = useLocalStorageState(
    "audioMuted",
    true,
  );
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAttempted = useRef(false);

  useEffect(() => {
    if (!hydrated || !audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.05;

    const startOnInteraction = () => {
      if (!isMuted) {
        audio.play().catch(() => {});
      }
      removeListeners();
    };

    const addListeners = () => {
      document.addEventListener("click", startOnInteraction);
      document.addEventListener("keydown", startOnInteraction);
      document.addEventListener("touchstart", startOnInteraction);
    };

    const removeListeners = () => {
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
      document.removeEventListener("touchstart", startOnInteraction);
    };

    const attemptPlay = () => {
      if (isMuted) {
        audio.pause();
      } else {
        audio.play().catch(() => {
          // Autoplay bloqueado, aguarda interação
          addListeners();
        });
      }
    };

    if (isMuted) {
      audio.pause();
      removeListeners();
    } else {
      if (!playAttempted.current) {
        const timer = setTimeout(() => {
          attemptPlay();
          playAttempted.current = true;
        }, 3000);
        return () => {
          clearTimeout(timer);
          removeListeners();
        };
      } else {
        attemptPlay();
      }
    }

    return () => removeListeners();
  }, [isMuted, hydrated]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    playAttempted.current = true;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/audio/noria_sound.mp3"
        loop
        preload="auto"
        muted={isMuted}
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
