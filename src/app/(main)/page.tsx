import Blog from '@/components/Blog'
import { CallToAction } from '@/components/CallToAction'
import Download from '@/components/Download'
import Faq from '@/components/Faq'
import { Faqs } from '@/components/Faqs'
import Features from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <Blog />
      <Download />
      {/* <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs /> */}
    </>
  )
}
