import React from 'react'
import { Container, SectionContainer } from './Container'
import Card from './Cards'
import screenshot from '@/images/app-screenshots/screenshot3.webp'
import AppDemo from './AppDemo'
import { Button } from './Button'
import { AppStoreDownloadSvg, GooglePlayDownloadSvg } from './Icons'
import { FadeIn } from './FadeIn'

export const DownloadSm = () => {
  return (
    <Card className="px-5 py-8 text-left">
      <div className="relative h-[420px] w-full overflow-hidden px-8 pt-6">
        <AppDemo screenshot={screenshot} className="w-full" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[157px] bg-gradient-to-t from-card-background" />
      </div>
      <div className="mt-4 space-y-4">
        <h2 className="font-black tracking-[0.15rem] text-highlight-primary">
          DOWNLOAD THE APP
        </h2>
        <p className="text-3xl font-bold leading-[1.15]">
          Experience the future of weather forecasts with AI
        </p>
      </div>
      <div className="mt-10 space-y-3">
        <Button
          href="https://www.apple.com/hu/app-store/"
          target="_blank"
          className="w-full py-1.5"
        >
          <AppStoreDownloadSvg />
        </Button>
        <Button
          href="https://play.google.com/store/"
          target="_blank"
          className="w-full py-1.5"
        >
          <GooglePlayDownloadSvg />
        </Button>
      </div>
    </Card>
  )
}

const DownloadLarger = () => {
  return (
    <Card className="flex gap-10 px-5 py-8 pl-20 text-left">
      <div className="flex w-1/2 items-center">
        <div className="mt-4">
          <h2 className="font-black tracking-[0.15rem] text-highlight-primary">
            DOWNLOAD THE APP
          </h2>
          <p className="mt-4 text-3xl font-bold leading-[1.15] lg:text-4xl">
            Experience the future of weather forecasts with AI
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 lg:flex-row">
            <Button
              href="https://www.apple.com/hu/app-store/"
              target="_blank"
              className="w-full py-1.5"
            >
              <AppStoreDownloadSvg />
            </Button>
            <Button
              href="https://play.google.com/store/"
              target="_blank"
              className="w-full py-1.5"
            >
              <GooglePlayDownloadSvg />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
        <AppDemo screenshot={screenshot} className="w-full max-w-[300px]" />
      </div>
    </Card>
  )
}

const Download = () => {
  return (
    <SectionContainer id="download">
      <Container>
        <FadeIn>
          <div className="md:hidden">
            <DownloadSm />
          </div>
          <div className="hidden md:block">
            <DownloadLarger />
          </div>
        </FadeIn>
      </Container>
    </SectionContainer>
  )
}

export default Download
