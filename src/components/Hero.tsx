import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LogoVertical } from './Logo'
import AppMarquee from './AppMarquee'
import { FadeIn, FadeInStagger } from './FadeIn'

const HeroTitle = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-3">
      <FadeIn>
        <LogoVertical className="h-[85px] w-auto" />
      </FadeIn>
      <FadeIn>
        <h1 className="bg-gradient-to-b from-white to-highlight-primary bg-clip-text text-center text-[2.1rem] font-black leading-none tracking-tighter text-transparent md:text-6xl">
          THE ULTIMATE <br /> APP EXPERIENCE
        </h1>
      </FadeIn>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden pt-10">
      <FadeInStagger>
        <Container>
          <section id="hero" className="flex flex-col items-center space-y-10">
            <HeroTitle />
            <FadeIn>
              <Button href="#download" className="z-20">
                Download
              </Button>
            </FadeIn>
          </section>
        </Container>
        <AppMarquee />
      </FadeInStagger>
    </div>
  )
}
