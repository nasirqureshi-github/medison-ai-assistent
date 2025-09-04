import Image from 'next/image'
import React from 'react'

const InputForm = () => {
  return (
    <div className='  flex flex-col justify-center'>
       
       <div className='flex justify-center'>
         <Image src={'/assets/images/qusetion.png'} width={150} height={150} alt="question"/> 
       </div>
       <h1 className='text-xl font-bold text-[#0C0C1E] text-center'>Still have a question?</h1>
       <h2 className='text-sm text-[#0C0C1E] text-center px-0 md:px-30'>We&apos;re here to help. Send us your question and we&apos;ll get back to you shortly.</h2>

       <form className="w-full max-w-md mx-auto mt-6">
  <label  className="block mb-2 text-sm font-medium text-gray-700">
    Your Question
  </label>
  <input
    type="text"
    id="question"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C8C78] border-gray-300"
    placeholder="Type your question here..."
  />
  <button
        className="flex mt-10 mx-auto text-sm text-white py-4 px-15 rounded-[50px] font-bold transition bg-gradient-to-b from-[#167363] to-[#1C8C78] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] cursor-pointer"
      >
        Send Now
      </button>
</form>

    </div>
  )
}

export default InputForm