"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Anamnese Energética",
    description:
      "Iniciamos com uma conversa para entender seu momento atual, suas questões e objetivos. Utilizamos o pêndulo para realizar um diagnóstico energético completo.",
  },
  {
    number: "02",
    title: "Identificação de Bloqueios",
    description:
      "Através da radiestesia, identificamos padrões desarmônicos, bloqueios energéticos, crenças limitantes e interferências que podem estar afetando seu bem-estar.",
  },
  {
    number: "03",
    title: "Aplicação Terapêutica",
    description:
      "Com os gráficos e símbolos sagrados da mesa, direcionamos frequências de cura específicas para transmutar as energias densas e restaurar o equilíbrio.",
  },
  {
    number: "04",
    title: "Integração e Acompanhamento",
    description:
      "Ao final, você recebe orientações para potencializar os resultados do atendimento e integrar as mudanças energéticas no seu dia a dia.",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background com parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-glow/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[35%] h-[45%] bg-gold-light/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header da seção */}
        <div ref={titleRef} className="mb-20 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            02
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 max-w-2xl text-balance"
          >
            Como
            <br />
            <span className="text-primary">Funciona</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg mt-6 max-w-xl"
          >
            O processo terapêutico com a Mesa Radiônica segue etapas
            cuidadosamente estruturadas para garantir resultados efetivos e
            duradouros.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-8 lg:p-10 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-transform duration-150 ease-out hover:scale-105"
    >
      {/* Número decorativo */}
      <span className="absolute top-6 right-6 text-6xl font-serif font-light text-muted/20 group-hover:text-primary/20 transition-colors duration-500">
        {step.number}
      </span>

      <div className="relative z-10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "3rem" } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="h-px bg-primary/50 mb-6"
        />

        <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
