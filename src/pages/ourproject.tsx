import Project from '@/components/Pages/Ourproject/project'
import PricingSection from '@/components/Pages/Ourproject/project1'
import Project1 from '@/components/Pages/Ourproject/project1'
import Mainlayout from '@/layouts/MainLayouts'
import React from 'react'

export default function ourproject() {
  return (
    <Mainlayout >
        
        <Project/>
        {/* <Project1/> */}
        <PricingSection/>
    </Mainlayout>
       
  )
}
