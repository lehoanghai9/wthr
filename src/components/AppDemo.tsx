import React from 'react'

import iphoneMockup from '@/images/iphoneFrame.webp'
import Image from 'next/image'
import clsx from 'clsx'

interface AppDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const AppDemo: React.FC<AppDemoProps> = ({ className, ...props }) => {
  return (
    <Image
      src={iphoneMockup}
      alt="iphone mockup"
      className={clsx('h-auto w-[210px]', className)}
      aria-hidden="true"
    />
  )
}

export default AppDemo
