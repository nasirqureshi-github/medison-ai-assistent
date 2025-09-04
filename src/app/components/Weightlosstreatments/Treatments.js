import React from 'react'
import TreatmentsCards from './TreatmentsCards'
import Bmicalculator from './Bmicalculator'

const Treatments = () => {
  return (
    <div className='mt-30 px-4'>
    <div className='text-center'>
    <h1 className='text-[32px] leading-8 font-bold'>More Than Just a Treatment, Wellness That Works</h1>
    <p className='text-[18px] leading-8'>What makes Medison Meds smarter, safe and more personal</p>
    </div>
    <div className="flex flex-col items-center md:flex-col lg:flex-row gap-2 -mt-8">
  <div className="flex-1 px-4 md:px-0">
    <TreatmentsCards />
  </div>
  <div className="flex-1 max-w-md px-4">
    <Bmicalculator />
  </div>
</div>

    </div>
  )
}

export default Treatments