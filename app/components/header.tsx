"use client"

import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const homeNavItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Planos', href: '#planos' },
  { name: 'Entrar em contato', href: '#contato' },
]

const cursosNavItems = [
  { name: 'O Curso', href: '#sobre-curso' },
  { name: 'Facilitadora', href: '#facilitadora' },
  { name: 'Conteúdo', href: '#o-que-aprender' },
  { name: 'Turma', href: '#informacoes-turma' },
  { name: 'Investimento', href: '#investimento' },
]

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isCursosPage = pathname === '/cursos'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20)
  })

  const navItems = isCursosPage ? cursosNavItems : homeNavItems

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 transition-colors duration-300 ${
        isScrolled ? 'bg-background/85 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + aba Cursos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6"
        >
          <Link
            href="/"
            className="text-lg font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
          >
            Mesa Radiônica
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/cursos"
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                isCursosPage
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cursos
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  isCursosPage ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Nav items */}
        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
          >
            <button
              type="button"
              aria-label="Abrir menu"
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Alternar tema claro ou escuro"
      title="Alternar tema claro ou escuro"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Moon size={18} className="dark:hidden" aria-hidden="true" />
      <Sun size={18} className="hidden dark:block" aria-hidden="true" />
    </button>
  )
}
