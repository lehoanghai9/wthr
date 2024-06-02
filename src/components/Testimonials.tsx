'use client'
import React from 'react'
import { Container, SectionContainer, SectionTitle } from './Container'
import clsx from 'clsx'
import { FadeIn, FadeInStagger } from './FadeIn'
import Card from './Cards'
import { Testimonial, testimonials } from '@/lib/constants'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity: string
  title: string
  className?: string
}

const Stat: React.FC<StatProps> = ({
  quantity,
  title,
  className,
  ...props
}) => {
  return (
    <FadeIn>
      <div className={clsx('', className)} {...props}>
        <h3 className="bg-gradient-to-b from-white to-highlight-primary bg-clip-text text-center text-[4.3rem] font-bold text-transparent md:text-[3.3rem] lg:text-[4.3rem]">
          {quantity}
        </h3>
        <p className="text-center text-xl font-bold">{title}</p>
      </div>
    </FadeIn>
  )
}

const Divider = () => {
  return (
    <FadeIn>
      <div className="h-[2px] w-[250px] bg-gradient-to-b from-white to-highlight-primary md:h-[130px] md:w-[2px]" />
    </FadeIn>
  )
}

const TestimonialCard = ({ author, image, comment }: Testimonial) => {
  return (
    <Card className="mr-6 flex h-[300px] w-[320px] flex-col justify-between space-y-8 p-10">
      <p className="text-xl font-medium">{comment}</p>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={author + ' image'}
          className="aspect-square w-[42px] rounded-full object-cover"
        />
        <span className="bg-gradient-to-b from-white to-highlight-primary bg-clip-text text-xl font-medium text-transparent">
          {author}
        </span>
      </div>
    </Card>
  )
}

const TestimonialsMarquee = () => {
  return (
    <FadeIn y={0}>
      <Marquee gradientColor="#121212" gradient className="mt-10 md:mt-20">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            author={testimonial.author}
            comment={testimonial.comment}
            image={testimonial.image}
            key={testimonial.author}
          />
        ))}
      </Marquee>
    </FadeIn>
  )
}

const Testimonials = () => {
  return (
    <SectionContainer id="testimonials">
      <Container>
        <SectionTitle label="Hear it from our users" />
        <div className="mt-12 flex justify-center">
          <FadeInStagger className="flex flex-col items-center gap-8 md:mt-20 md:flex-row md:justify-between lg:w-[80%]">
            <Stat title="Community Members" quantity="5000+" />
            <Divider />
            <Stat title="App Downloads" quantity="10m+" />
            <Divider />
            <Stat title="Countries" quantity="240" />
          </FadeInStagger>
        </div>
        <TestimonialsMarquee />
      </Container>
    </SectionContainer>
  )
}

export default Testimonials
