"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Contratar', href: '#contratar' },
]

export function Header() {
  const { scrollY } = useScroll()
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  )
  const headerBackdrop = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  )

  return (
    <motion.header
      style={{ 
        backgroundColor: headerBackground,
        backdropFilter: headerBackdrop,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link 
            href="#inicio" 
            className="text-lg font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
          >
            Mesa Radiônica
          </Link>
        </motion.div>

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
                ease: [0.22, 1, 0.36, 1] 
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden"
        >
          <button className="p-2 text-foreground/80 hover:text-foreground transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </nav>
    </motion.header>
  )
}
