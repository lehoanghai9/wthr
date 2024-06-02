import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logo, Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import { navlinks, socialMediaLinks } from '@/lib/constants'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16 lg:gap-20">
          <div className="space-y-4 lg:w-[80%]">
            <Logo className="h-[76px] w-[233px] flex-none" />
            <p className="text-2xl font-bold">
              Experience the weatherlike never before.
            </p>
          </div>
          <div className='md:flex w-full'>
            <nav className="mt-10 md:w-1/2">
              <h3 className="text-xl font-medium">Navigation</h3>
              <div className="mt-6 flex flex-col gap-4">
                {navlinks.map((nav) => (
                  <Link href={nav.href} className="font-medium">
                    {nav.label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="mt-10 md:w-1/2">
              <h3 className="text-xl font-medium">Social Media</h3>
              <div className="mt-6 flex flex-col gap-4">
                {socialMediaLinks.map((nav) => (
                  <Link href={nav.href} target='_blank' className="font-medium">
                    {nav.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm">
            &copy; Copyright Appverse {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
