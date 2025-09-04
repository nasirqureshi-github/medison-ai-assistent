import React from 'react'
import TestimonialLeft from '../components/Testimonial/Testimonalleft'
import TestimonialRight from '../components/Testimonial/TestimonalRight'

const Testimonial = () => {
  return (
    <div className='container mx-auto mt-25'>
    <div className='text-center'>
        <h3 className='text-[18px] font-bold text-[#1C8C78]'>Testimonials</h3>
        <h1 className='text-[32px] font-bold text-[#0C0C1E]'>Real Stories. Real Results.</h1>
        <p className='text-[#717171] text-[18px] px-2'>Hear how people like you transformed their health journeys with a little help from Madison.</p>
        </div>
        <div>
            <TestimonialLeft />
            <TestimonialRight/>
        </div>
    </div>
  )
}

export default Testimonial