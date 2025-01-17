'use client'
import { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import appScreenshot1 from '@/images/app-screenshots/screenshot1.webp'
import appScreenshot2 from '@/images/app-screenshots/screenshot2.webp'
import appScreenshot3 from '@/images/app-screenshots/screenshot3.webp'
import appScreenshot4 from '@/images/app-screenshots/screenshot4.webp'
import appScreenshot5 from '@/images/app-screenshots/screenshot5.webp'
import appScreenshot6 from '@/images/app-screenshots/screenshot6.webp'
import AppDemo from './AppDemo'
import { FadeIn } from './FadeIn'

interface AppColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  msPerPixel?: number
  screenShots: StaticImageData[]
}

const AppColumn: React.FC<AppColumnProps> = ({
  screenShots,
  className,
  msPerPixel = 0,
  ...props
}) => {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
      className={clsx('h-fit animate-marquee space-y-6 py-3', className)}
      {...props}
    >
      <div className="rotate-180">
        <AppDemo screenshot={screenShots[1]} />
      </div>
      <div className="rotate-180">
        <AppDemo screenshot={screenShots[0]} />
      </div>
      <div className="rotate-180">
        <AppDemo screenshot={screenShots[1]} />
      </div>
      <div className="rotate-180">
        <AppDemo screenshot={screenShots[0]} />
      </div>
    </div>
  )
}

const OverLay = () => {
  return (
    <>
      <div className="absolute top-[-155px] z-10 h-[1074px] w-[1200px] overflow-hidden bg-[radial-gradient(60%_69.3%_at_50%_84%,rgba(255,255,255,0)_38.921734234234236%,rgba(18,18,18)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[300px] bg-gradient-to-t from-background" />
    </>
  )
}

const AppMarquee = () => {
  return (
    <FadeIn y={0}>
      <div className="relative flex w-full justify-center overflow-hidden">
        <OverLay />
        <div className="flex h-[700px] w-[1200px] flex-shrink-0 rotate-180 justify-center gap-6 overflow-hidden">
          <FadeIn y={12} delay={0.5}>
            <AppColumn
              msPerPixel={12}
              screenShots={[appScreenshot6, appScreenshot5]}
            />
          </FadeIn>
          <FadeIn y={24} delay={0.3}>
            <AppColumn
              msPerPixel={7}
              screenShots={[appScreenshot4, appScreenshot2]}
            />
          </FadeIn>
          <FadeIn y={48}>
            <AppColumn
              msPerPixel={6}
              screenShots={[appScreenshot6, appScreenshot1]}
            />
          </FadeIn>
          <FadeIn y={124} delay={0.3}>
            <AppColumn
              msPerPixel={9}
              screenShots={[appScreenshot5, appScreenshot3]}
            />
          </FadeIn>
          <FadeIn y={12} delay={0.5}>
            <AppColumn
              msPerPixel={10}
              screenShots={[appScreenshot4, appScreenshot2]}
            />
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  )
}

export default AppMarquee
