"use client";
import { useEffect, useState } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  // 🔹 Hidrata com localStorage (client only)
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        setState(JSON.parse(item));
      }
    } catch (error) {
      console.warn("Erro ao ler localStorage:", error);
    } finally {
      setIsHydrated(true);
    }
  }, [key]);

  // 🔹 Persiste mudanças
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn("Erro ao salvar localStorage:", error);
    }
  }, [key, state, isHydrated]);

  return [state, setState, isHydrated] as const;
}
