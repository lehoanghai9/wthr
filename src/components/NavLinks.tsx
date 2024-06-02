'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { navlinks } from '@/lib/constants'
import { useInViewSection } from '@/hooks/useInViewSection'

export function NavLinks() {
  const sectionInView = useInViewSection()

  return navlinks.map(({ label, href }) => (
    <Link
      key={label}
      href={href}
      className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 font-semibold transition-colors duration-200 ${
        '/#' + sectionInView === href && 'text-background'
      }`}
    >
      <AnimatePresence>
        {'/#' + sectionInView === href && (
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
