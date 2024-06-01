import React from 'react'
import { Container, SectionContainer, SectionTitle } from './Container'
import Card from './Cards'
import appScreenshot1 from '@/images/app-screenshots/screenshot1.webp'
import appScreenshot2 from '@/images/app-screenshots/screenshot2.webp'
import appScreenshot3 from '@/images/app-screenshots/screenshot3.webp'
import appScreenshot4 from '@/images/app-screenshots/screenshot4.webp'
import appScreenshot5 from '@/images/app-screenshots/screenshot5.webp'
import AppDemo from './AppDemo'
import clsx from 'clsx'
import { StarIcon } from '@heroicons/react/24/solid'
import { splitArray } from '@/lib/utils'
import { communityMembers } from '@/lib/constants'
import Image from 'next/image'
import { FadeIn, FadeInStagger } from './FadeIn'

interface FeatureTitleProps extends React.ComponentPropsWithoutRef<'h2'> {
  title: string
  className?: string
}

const FeatureTitle: React.FC<FeatureTitleProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx('text-lg font-bold text-highlight-primary', className)}
      {...props}
    >
      {title}
    </h2>
  )
}

interface FeatureDescriptionProps extends React.ComponentPropsWithoutRef<'p'> {
  description: string
  className?: string
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  description,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx('text-2xl font-medium md:text-[1.8rem]', className)}
      {...props}
    >
      {description}
    </p>
  )
}

const AdaptibilityCard = () => {
  return (
    <FadeIn className="md:col-span-4 ">
      <Card className="h-[440px] overflow-hidden px-8 pt-8">
        <div className="mb-16 space-y-4">
          <FeatureTitle title="ADAPTABILITY" />
          <FeatureDescription description="Make the experience truly intuitive." />
        </div>
        <div className=" flex h-[250px] w-fit gap-6 lg:w-full">
          <AppDemo
            screenshot={appScreenshot3}
            className=" h-fit w-[155px] lg:w-full"
          />
          <AppDemo
            screenshot={appScreenshot5}
            className=" h-fit w-[155px] lg:w-full"
          />
          <AppDemo
            screenshot={appScreenshot4}
            className=" h-fit w-[155px] lg:w-full"
          />
        </div>
      </Card>
    </FadeIn>
  )
}

const AppStoreRatingCard = () => {
  return (
    <FadeIn className="h-full md:col-span-2">
      <Card className="flex flex-col justify-between overflow-hidden px-8 py-8 md:h-[440px]">
        <div className="mb-16 space-y-4">
          <FeatureTitle title="APP STORE" />
          <FeatureDescription description="Top rated app in the world." />
        </div>
        <div className="">
          <h3 className="bg-gradient-to-b from-white to-highlight-primary bg-clip-text text-[4.3rem] font-bold text-transparent lg:text-[5.7rem]">
            4.9
          </h3>
          <div className="flex gap-2.5">
            <StarIcon className="aspect-square w-9 text-highlight-primary" />
            <StarIcon className="aspect-square w-9 text-highlight-primary" />
            <StarIcon className="aspect-square w-9 text-highlight-primary" />
            <StarIcon className="aspect-square w-9 text-highlight-primary" />
            <StarIcon className="aspect-square w-9 text-highlight-primary" />
          </div>
        </div>
      </Card>
    </FadeIn>
  )
}

const CommunityCard = () => {
  const groups = splitArray(communityMembers)
  return (
    <FadeIn className="md:col-span-3 xl:col-span-2">
      <Card className="flex h-[440px] flex-col overflow-hidden px-8 py-8 ">
        <div className="mb-20 space-y-4">
          <FeatureTitle title="COMMUNITY" />
          <FeatureDescription description="Join the community of likeminded people." />
        </div>
        <div className="flex w-full flex-col items-center gap-2.5">
          {groups.map((members, index) => (
            <div className="flex gap-2.5" key={index}>
              {members.map((member) => (
                <div
                  key={member.name}
                  className="flex aspect-square w-[72px] items-center justify-center rounded-full bg-highlight-primary p-1"
                >
                  {!member?.image ? (
                    <span className="font-black tracking-widest text-background">
                      {member.name}
                    </span>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="aspect-square rounded-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </FadeIn>
  )
}

const ReasonCard = () => {
  return (
    <FadeIn className=" md:col-span-3 xl:col-span-4">
      <Card className="flex h-[440px] flex-col overflow-hidden px-8 py-8  xl:flex-row xl:gap-16">
        <div className="mb-10 space-y-4 xl:w-[70%]">
          <FeatureTitle title="PRECISE FORECASTS" />
          <FeatureDescription description="AI-powered weather forecasts." />
        </div>
        <div className="w-full">
          <AppDemo screenshot={appScreenshot2} className="w-full" />
        </div>
      </Card>
    </FadeIn>
  )
}

const Features = () => {
  return (
    <SectionContainer id="features" className="pt-28">
      <Container>
        <FadeInStagger>
          <SectionTitle label="What makes us the best app for you" />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 lg:mt-16">
            <AdaptibilityCard />
            <AppStoreRatingCard />
            <CommunityCard />
            <ReasonCard />
          </div>
        </FadeInStagger>
      </Container>
    </SectionContainer>
  )
}

export default Features
