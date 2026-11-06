"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function CourseCertificationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="certificacao"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[50%] h-[60%] bg-blue-glow/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Esquerda – número e título */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
            >
              06
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
            >
              Certificação
              <br />
              <span className="text-primary">e Bônus</span>
            </motion.h2>
          </div>

          {/* Direita – detalhes */}
          <div className="space-y-8">
            {/* Certificação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-8 rounded-2xl border border-primary/30 bg-primary/5"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Certificado pela ABRATH</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ao concluir as 16 horas de formação, você recebe o certificado oficial pela
                    <strong className="text-foreground/80"> ABRATH</strong> — Associação Brasileira de Terapeutas Holísticos,
                    reconhecendo sua qualificação como Operador(a) de Mesa de Estação Radiônica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bônus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gold-light/20 border border-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary mb-1 block">Bônus exclusivo</span>
                  <h3 className="text-lg font-medium text-foreground mb-2">E-book de Radiestesia</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Curso extra em formato de e-book sobre Radiestesia e tratamentos radiestésicos,
                    para aprofundar seu conhecimento e expandir sua prática.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
