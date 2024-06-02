import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { navlinks, socialMediaLinks } from '@/lib/constants'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:gap-20 lg:py-16">
          <div className="space-y-4 lg:w-[80%]">
            <Logo className="h-[76px] w-[233px] flex-none" />
            <p className="text-2xl font-bold">
              Experience the weatherlike never before.
            </p>
          </div>
          <div className="w-full md:flex">
            <nav className="mt-10 md:w-1/2">
              <h3 className="text-xl font-medium">Navigation</h3>
              <div className="mt-6 flex flex-col gap-4">
                {navlinks.map((nav) => (
                  <Link key={nav.label} href={nav.href} className="font-medium">
                    {nav.label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="mt-10 md:w-1/2">
              <h3 className="text-xl font-medium">Social Media</h3>
              <div className="mt-6 flex flex-col gap-4">
                {socialMediaLinks.map((nav) => (
                  <Link
                    href={nav.href}
                    key={nav.label}
                    target="_blank"
                    className="font-medium"
                  >
                    {nav.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm">
            &copy; Copyright Appverse {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
