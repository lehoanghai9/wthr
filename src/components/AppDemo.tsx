'use client'
import React, { useRef, useEffect, useState } from 'react'

import iphoneMockup from '@/images/iphoneFrame.webp'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

interface AppDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  screenshot: StaticImageData
}

const AppDemo: React.FC<AppDemoProps> = ({
  className,
  screenshot,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [divWidth, setDivWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        if (entry.target === divRef.current) {
          setDivWidth(entry.contentRect.width)
        }
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)

    if (divRef.current) {
      resizeObserver.observe(divRef.current)
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current)
      }
    }
  }, [])

  const paddingX = divWidth * 0.0527 + 'px'
  const paddingY = divWidth * 0.043 + 'px'
  const borderRadius = divWidth * 0.125 + 'px'
  return (
    <div
      ref={divRef}
      className={clsx('relative aspect-[217/437] h-auto w-[210px]', className)}
      {...props}
    >
      <div
        className="absolute h-full w-full"
        style={{ padding: `${paddingY} ${paddingX} ${paddingY} ${paddingX}` }}
      >
        <Image
          src={screenshot}
          alt="app screenshot"
          className={clsx('h-full w-full')}
          style={{ borderRadius: borderRadius }}
          aria-hidden="true"
        />
      </div>
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className={clsx('absolute h-full w-full')}
        aria-hidden="true"
      />
    </div>
  )
}

export default AppDemo
