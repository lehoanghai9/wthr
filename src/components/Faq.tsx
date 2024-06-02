'use client'
import React from 'react'
import { Container, SectionContainer, SectionTitle } from './Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'
import { faqs } from '@/lib/constants'
import { FadeIn, FadeInStagger } from './FadeIn'

const Faq = () => {
  return (
    <SectionContainer id="faq">
      <Container>
        <SectionTitle label="Frequently asked questions" />
        <FadeInStagger>
          <Accordion type="multiple" className="mt-10 w-full px-2">
            {faqs.map((faq) => (
              <FadeIn key={faq.question}>
                <AccordionItem value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </FadeInStagger>
      </Container>
    </SectionContainer>
  )
}

export default Faq
