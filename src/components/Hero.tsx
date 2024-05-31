import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LogoVertical } from './Logo'
import AppMarquee from './AppMarquee'

const HeroTitle = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-3">
      <LogoVertical className="h-[85px] w-auto" />
      <h1 className="bg-gradient-to-b from-white to-highlight-primary bg-clip-text text-center text-[2.1rem] font-black leading-none tracking-tighter text-transparent md:text-6xl">
        THE ULTIMATE <br /> APP EXPERIENCE
      </h1>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden pb-20 pt-10 lg:pb-32 xl:pb-36">
      <Container>
        <div className="flex flex-col items-center space-y-10">
          <HeroTitle />
          <Button className="z-20">Download</Button>
        </div>
      </Container>
      <AppMarquee />
    </div>
  )
}
