import clsx from 'clsx'
import React, { FC, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'rounded-universal border border-border-primary bg-card-background',
        className,
      )}
      {...props}
    />
  )
}

export default Card
