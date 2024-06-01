import clsx from 'clsx'
import React from 'react'
import { FadeIn } from './FadeIn'

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        'text-center text-[1.4rem] font-semibold md:text-4xl  lg:text-[2.8rem]',
        className,
      )}
      {...props}
    >
      {title}
    </h2>
  )
}

interface SectionHeaderWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const SectionHeaderWrapper: React.FC<SectionHeaderWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <FadeIn>
      <div
        className={clsx(
          'mb-12 flex w-full flex-col items-center gap-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </FadeIn>
  )
}

interface SectionHeaderProps {
  className?: string
  title: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <SectionHeaderWrapper className={className}>
      <SectionTitle title={title} />
    </SectionHeaderWrapper>
  )
}

export default SectionHeader
