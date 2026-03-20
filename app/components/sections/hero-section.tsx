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

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const rightTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background -z-10" />
      
      {/* Blurs de fundo dinâmicos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 left-0 w-[50%] h-[70%] bg-blue-glow/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-blue-glow/15 rounded-full blur-[150px] translate-x-1/3 translate-y-1/4" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-gold-light/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen py-20 lg:py-0">
          
          {/* ESQUERDA */}
          <motion.div
            className="lg:w-1/3 text-center lg:text-left"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              Terapia Energética
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
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
                duration: 1,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-16 h-px bg-primary/40 mt-8 mx-auto lg:mx-0"
            />
          </motion.div>

          {/* CENTRO - 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-full lg:w-2/5 h-[40vh] lg:h-[60vh] my-8 lg:my-0 flex-shrink-0"
          >
            <Scene3D />
          </motion.div>

          {/* DIREITA */}
          <motion.div
            className="lg:w-1/3 text-center lg:text-right"
            style={{ y: rightTextY, opacity: textOpacity }}
          >
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto lg:ml-auto"
            >
              Uma ferramenta sagrada de harmonização energética que conecta você
              às frequências universais de cura e transformação.
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
                  },
                },
              }}
              className="mt-8 space-y-3 text-sm text-muted-foreground flex flex-col items-center lg:items-end"
            >
              {[
                "Equilíbrio Energético",
                "Harmonização Espiritual",
                "Cura Vibracional",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
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
              transition={{ duration: 0.8, delay: 1.2 }}
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
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}