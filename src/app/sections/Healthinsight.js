import React from 'react'
import Healthcard from '../components/HealthInsight/Healthcard'

const Healthinsight = () => {
  return (
    <div className=' mt-25 px-4 container mx-auto' id='Anti-AgingTreatments'>
    <div className='text-center'>
      <h1 className='text-[32px] font-bold'>Latest Health Insight</h1>
      <h2 className='text-[18px] text-[#717171]'>Stay informed with the latest research, tips and success stories form our medical experts.</h2>
      </div>
      <div className='mt-10 mx-0 '>
     <Healthcard/>
    <button
        className="flex mt-10 mx-auto text-sm text-white py-4 px-15 rounded-[50px] font-bold transition bg-gradient-to-b from-[#167363] to-[#1C8C78] shadow-[0_4px_40px_0_rgba(0,0,0,0.12)] cursor-pointer"
      >
        Read More stories
      </button>
      </div>
    </div>
   
  )
}

export default Healthinsight