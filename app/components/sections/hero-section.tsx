"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scene3D } from "../scene-3d";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rightTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background com blur azul nas bordas */}
      <div className="absolute inset-0 bg-background -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen py-20 lg:py-0">
          {/* Lado esquerdo - Título principal */}
          <motion.div
            className="lg:w-1/3 text-center lg:text-left"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              Terapia Energética
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[0.95] tracking-tight text-balance"
            >
              Mesa
              <br />
              <span className="text-primary">Radiônica</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-16 h-px bg-primary/40 mt-8 mx-auto lg:mx-0"
            />
          </motion.div>

          {/* Centro - Modelo 3D */}
          <div className="w-full lg:w-2/5 h-[40vh] lg:h-[60vh] my-8 lg:my-0 flex-shrink-0">
            <Scene3D />
          </div>

          {/* Lado direito - Texto descritivo */}
          <motion.div
            className="lg:w-1/3 text-center lg:text-right"
            style={{ y: rightTextY, opacity: textOpacity }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto lg:ml-auto"
            >
              Uma ferramenta sagrada de harmonização energética que conecta você
              às frequências universais de cura e transformação.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 space-y-3 text-sm text-muted-foreground flex flex-col items-center lg:items-end"
            >
              {[
                "Equilíbrio Energético",
                "Harmonização Espiritual",
                "Cura Vibracional",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="flex items-center justify-center lg:justify-end gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#sobre"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              Explorar
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
