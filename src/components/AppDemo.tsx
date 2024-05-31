import React from 'react'

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
  return (
    <div
      className={clsx('relative aspect-[217/437] h-auto w-[210px]', className)}
      {...props}
    >
      <div className="absolute h-full w-full px-3 py-2">
        <Image
          src={screenshot}
          alt="app screenshot"
          className={clsx('h-full w-full rounded-[25px]', className)}
          aria-hidden="true"
        />
      </div>
      <Image
        src={iphoneMockup}
        alt="iphone mockup"
        className={clsx('absolute h-full w-full', className)}
        aria-hidden="true"
      />
    </div>
  )
}

export default AppDemo
