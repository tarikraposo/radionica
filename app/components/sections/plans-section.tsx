"use client";

import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Sessão Única",
    price: "R$ 180",
    description: "Ideal para quem quer experimentar",
    features: [
      "Atendimento individual",
      "Duração de 60-90 minutos",
      "Diagnóstico energético completo",
      "Tratamento personalizado",
      "Orientações pós-sessão",
    ],
    highlighted: false,
  },
  {
    name: "Pacote Transformação",
    price: "R$ 450",
    description: "Recomendado para resultados profundos",
    features: [
      "3 sessões completas",
      "Acompanhamento semanal",
      "Tratamentos de manutenção",
      "Suporte via WhatsApp",
      "Material de apoio exclusivo",
    ],
    highlighted: true,
  },
  {
    name: "Atendimento à Distância",
    price: "R$ 150",
    description: "Para quem está longe",
    features: [
      "Sessão online completa",
      "Mesmo efeito presencial",
      "Relatório por escrito",
      "Gravação da sessão",
      "Flexibilidade de horário",
    ],
    highlighted: false,
  },
];

export function PlansSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="relative min-h-screen pt-16 pb-32 overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/3 left-0 w-[45%] h-[50%] bg-blue-glow/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[45%] bg-gold-light/10 rounded-full blur-[130px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div ref={titleRef} className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            03
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            Planos e
            <br />
            <span className="text-primary">valores</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto"
          >
            Escolha a opção que melhor se adequa às suas necessidades e comece
            sua transformação energética hoje.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: (typeof plans)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  function scheduleSession() {
    const numero = "5561992072082";
    const mensagem = `Olá, gostaria de agendar uma sessão com a mesa Radiônica *${plan.name}*.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }

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
      className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-transform duration-150 ease-out hover:scale-105 ${
        plan.highlighted
          ? "bg-primary/5 border-primary/40 scale-105 shadow-[0_20px_50px_-12px_rgba(var(--primary-rgb),0.15)] hover:scale-110 "
          : "bg-card/50 border-border/50 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
          Mais Popular
        </span>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-serif font-light">{plan.price}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full py-5 cursor-pointer ${
          plan.highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
        onClick={scheduleSession}
      >
        <div className="flex items-center w-full justify-center gap-2">
          <FaWhatsapp size={24} />
          <span className="text-sm font-medium">Agendar Sessão</span>
        </div>
      </Button>
    </motion.div>
  );
}
