import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { satoshi } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - Appverse',
    default: 'Appverse - Ultimate App',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-background text-text-primary antialiased', satoshi.className)}>
      <body>{children}</body>
    </html>
  )
}
