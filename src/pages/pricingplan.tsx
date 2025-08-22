
import Counting from '@/components/Pages/Counting'
import PricingSection from '@/components/Pages/pricing'
import Pricingplan from '@/components/Pages/Pricingplan'
import TestimonialCard from '@/components/Pages/Testimonial'
import Mainlayout from '@/layouts/MainLayouts'
import React from 'react'

export default function pricingplan() {
  return (
    <Mainlayout>
      <Pricingplan/>
      <PricingSection/>
      <Counting/>
      <TestimonialCard/>
      
    </Mainlayout>
  )
}
