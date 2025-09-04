import React from 'react'
import FAQ from '../components/Faqs/FAQ'
import InputForm from '../components/Faqs/InputForm'

const Faqs = () => {
  return (
    <div id='faqs' className='my-20 mx-10 grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <FAQ/>
        <InputForm/>
    </div>
  )
}

export default Faqs