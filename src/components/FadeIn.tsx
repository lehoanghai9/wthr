'use client'

import { createContext, useContext } from 'react'
import { MotionProps, motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

interface FadeInProps extends MotionProps {
  className?: string
  y?: number
  opacity?: number
  delay?: number
  duration?: number
}

export function FadeIn({
  className,
  opacity = 0,
  y = -24,
  delay,
  ...props
}: FadeInProps) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: opacity, y: shouldReduceMotion ? 0 : y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ...(delay ? { delay } : {}) }}
      className={className}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

interface FadeInStaggerProps extends MotionProps {
  faster?: boolean
  className?: string
}

export function FadeInStagger({
  faster = false,
  className,
  ...props
}: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        className={className}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
