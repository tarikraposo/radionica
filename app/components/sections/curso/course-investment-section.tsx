"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export function CourseInvestmentSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de me inscrever no curso de Operador(a) de Mesa de Estação Radiônica."
  )
  const whatsappUrl = `https://wa.me/5561992072082?text=${whatsappMessage}`

  return (
    <section
      id="investimento"
      className="relative pt-16 pb-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[45%] h-[50%] bg-blue-glow/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[45%] bg-gold-light/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            08
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            Investimento
            <br />
            <span className="text-primary">e Inscrições</span>
          </motion.h2>
        </div>

        {/* Cards de preço */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {/* À vista */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative p-8 rounded-2xl border border-primary/40 bg-primary/5 scale-105 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
              Melhor oferta
            </span>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Valor promocional</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-serif font-light text-foreground">997</span>
                <span className="text-sm text-muted-foreground">,00</span>
              </div>
              <p className="text-sm text-muted-foreground">à vista</p>
              <div className="mt-6 pt-6 border-t border-border/40">
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compra 100% segura
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certificado ABRATH incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apostila completa inclusa
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bônus: e-book de Radiestesia
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Parcelado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm"
          >
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Valor tabelado</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-serif font-light text-foreground">1.380</span>
                <span className="text-sm text-muted-foreground">,00</span>
              </div>
              <p className="text-sm text-muted-foreground">em até 12 vezes</p>
              <div className="mt-6 pt-6 border-t border-border/40">
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted-foreground/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compra 100% segura
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted-foreground/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certificado ABRATH incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted-foreground/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apostila completa inclusa
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted-foreground/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bônus: e-book de Radiestesia
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desconto especial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm text-muted-foreground">
            ✦ Condição especial de desconto para quem já realizou o curso de{" "}
            <strong className="text-foreground/80">Radiestesia com Euda Raposo</strong>.
            Consulte no WhatsApp.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <FaWhatsapp size={22} />
            Quero me inscrever
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-5 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            Contato pelo Instagram Direct
          </a>
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
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}
