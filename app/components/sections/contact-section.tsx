"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "../ui/button";

const plans = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const sendForm = async (data: {
    nome: string;
    email: string;
    whatsapp: string;
    mensagem: string;
  }) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const dados = Object.fromEntries(formData.entries()) as {
      nome: string;
      email: string;
      whatsapp: string;
      mensagem: string;
    };
    sendForm(dados);
    setFormSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contratar"
      className="relative min-h-screen pt-16 pb-32 overflow-hidden"
    >
      {/* Background com parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/3 left-0 w-[45%] h-[50%] bg-blue-glow/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[45%] bg-gold-light/10 rounded-full blur-[130px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header da seção */}
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
            Inicie sua
            <br />
            <span className="text-primary">Jornada</span>
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

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-light mb-4">
              Entre em Contato
            </h3>
            <p className="text-muted-foreground">
              Tem alguma dúvida? Envie sua mensagem e retornaremos em breve.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 rounded-2xl bg-card/50 border border-primary/30"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
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
              </div>
              <h4 className="text-xl font-medium mb-2">Mensagem Enviada!</h4>
              <p className="text-muted-foreground">
                Retornaremos em breve. Gratidão pela confiança.
              </p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="nome"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="whatsapp"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="mensagem"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors outline-none resize-none"
                  placeholder="Conte-nos como podemos ajudá-lo..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium"
              >
                Enviar Mensagem
              </Button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-32 pt-12 border-t border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2026 Mesa Radiônica. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
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

      <div className="text-center mb-8 ">
        <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-serif font-light">{plan.price}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
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
        } `}
        onClick={() => scheduleSession()}
      >
        <div className="flex items-center w-full justify-center gap-2">
          <FaWhatsapp size={24} />
          <span className="text-sm font-medium">Agendar Sessão</span>
        </div>
      </Button>
    </motion.div>
  );
}
