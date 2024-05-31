'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navlinks } from '@/lib/constants'

export function NavLinks() {
  let [activeIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

  return navlinks.map(({ label, href }, index) => (
    <Link
      key={label}
      href={href}
      className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 font-semibold transition-colors duration-200 ${activeIndex === index && "text-background"}`}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {activeIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-full bg-highlight-primary"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
