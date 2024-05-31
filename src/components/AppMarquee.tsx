'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import iphoneMockup from '@/images/iphoneFrame.webp'
import clsx from 'clsx'
import Marquee from 'react-fast-marquee'

interface AppColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  msPerPixel?: number
}

const AppColumn: React.FC<AppColumnProps> = ({
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
      className={clsx('h-fit animate-marquee space-y-6 py-4', className)}
      {...props}
    >
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className="h-auto w-[210px] rotate-180"
        aria-hidden="true"
      />
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className="h-auto w-[210px] rotate-180"
        aria-hidden="true"
      />
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className="h-auto w-[210px] rotate-180"
        aria-hidden="true"
      />
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className="h-auto w-[210px] rotate-180"
        aria-hidden="true"
      />
    </div>
  )
}

const OverLay = () => {
  return (
    <>
      <div className="absolute top-[-150px] z-10 h-[1074px] w-[1200px] overflow-hidden bg-[radial-gradient(60%_69.3%_at_50%_84%,rgba(255,255,255,0)_38.921734234234236%,rgba(18,18,18)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-background" />
    </>
  )
}

const AppMarquee = () => {
  return (
    <div className="relative flex w-full justify-center overflow-hidden">
      <OverLay />
      <div className="flex h-[800px] w-[1200px] flex-shrink-0 rotate-180 justify-center gap-6 overflow-hidden">
        <AppColumn msPerPixel={11} />
        <AppColumn msPerPixel={10} />
        <AppColumn msPerPixel={6} />
        <AppColumn msPerPixel={12} />
        <AppColumn msPerPixel={15} />
      </div>
    </div>
  )
}

export default AppMarquee
