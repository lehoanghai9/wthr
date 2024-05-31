'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { navlinks } from '@/lib/constants'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="text-2xl font-bold leading-7 tracking-tight text-text-primary flex justify-between"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="flex w-full justify-center">
      <nav className="fixed z-50 mt-6 flex w-[95%] shadow-primary-glow md:shadow-none justify-between rounded-full bg-[#121212]/75 px-8 py-4 md:w-auto mx-4 backdrop-blur-md">
        <div className="relative z-10 flex items-center gap-6">
          <Link href="/" aria-label="Home">
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="hidden md:flex md:gap-10">
            <NavLinks />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Popover className="md:hidden ">
            {({ open }) => (
              <>
                <PopoverButton
                  className="relative z-10  inline-flex items-center rounded-lg stroke-highlight-primary p-2 hover:bg-highlight-primary/50 active:stroke-highlight-primary ui-not-focus-visible:outline-none"
                  aria-label="Toggle site navigation"
                >
                  {({ open }) =>
                    open ? (
                      <ChevronUpIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )
                  }
                </PopoverButton>
                <AnimatePresence initial={false}>
                  {open && (
                    <>
                      {/* <PopoverOverlay
                        static
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-[#121212]/75 backdrop-blur"
                      /> */}
                      <PopoverPanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: 0,
                          transition: { duration: 0.2 },
                        }}
                        className="absolute inset-x-0 top-0 z-0 origin-top rounded-[36px] bg-background px-8 pb-6 pt-24 shadow-gray-900/20"
                      >
                        <div className="space-y-6">
                          {navlinks.map(({ label, href }) => (
                            <MobileNavLink href={href} key={label}>
                              {label}
                              <ChevronRightIcon className="aspect-square w-6" />
                            </MobileNavLink>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                          <Button href="#">Download the app</Button>
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  )
}
