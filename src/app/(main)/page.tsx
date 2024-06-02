
import Download from '@/components/Download'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import { Hero } from '@/components/Hero'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <Download />
    </>
  )
}
