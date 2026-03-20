"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={sectionRef}
      id="sobre" 
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background decorativo (removido blur azul para alternância) */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gold-light/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          ref={contentRef}
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Lado esquerdo - Número e título */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
            >
              01
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
            >
              Sobre a Mesa
              <br />
              <span className="text-primary">Radiônica</span>
            </motion.h2>
          </div>

          {/* Lado direito - Texto */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              A Mesa Radiônica é uma ferramenta de trabalho energético que utiliza gráficos, símbolos sagrados e cristais para canalizar e direcionar energias sutis em prol da harmonização do ser.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Desenvolvida a partir de conhecimentos ancestrais combinados com estudos da física quântica, a mesa atua como um portal de conexão entre dimensões, permitindo o acesso a informações do campo energético e a transmutação de padrões desarmônicos.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Cada atendimento é único e personalizado, onde o terapeuta radiestesista utiliza pêndulos e outros instrumentos para identificar bloqueios energéticos e aplicar os tratamentos mais adequados para cada situação específica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <div className="flex flex-wrap gap-4">
                {['Cristais', 'Símbolos Sagrados', 'Radiestesia', 'Geometria Sagrada'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
