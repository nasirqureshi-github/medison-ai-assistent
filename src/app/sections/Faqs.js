import React from 'react'
import FAQ from '../components/Faqs/FAQ'
import InputForm from '../components/Faqs/InputForm'

const Faqs = () => {
  return (
    <div id='faqs' className='container mx-auto my-30 lg:px-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <FAQ/>
        <InputForm/>
    </div>
  )
}

export default Faqs