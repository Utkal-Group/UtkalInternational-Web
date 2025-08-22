
import Details from '@/components/Pages/Projectdetails/Details'
import Herosection from '@/components/Pages/Projectdetails/Herosection'
import Mainlayout from '@/layouts/MainLayouts'
import React from 'react'

export default function projectdetails() {
  return (
    <Mainlayout>
        <Details/>
        <Herosection/>
      
    </Mainlayout>
  )
}
