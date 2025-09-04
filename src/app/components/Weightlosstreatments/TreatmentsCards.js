import Image from 'next/image'
import React from 'react'

const TreatmentsCards = () => {
  return (
    <div className="mt-20 ml-2 grid grid-cols-2 max-w-3xl gap-y-0 gap-x-[0.9px] ">
     
    <div className="bg-[#2E9E8B] rounded-tl-2xl pt-0 h-[300px]  md:h-[230px] p-6 flex flex-col items-start justify-center
   duration-500 ease-in-out transform hover:scale-110 hover:rounded-2xl  ">
  <Image src="/assets/images/icon-2.png" width={60} height={60} alt="icon" />
  <h1 className="mt-4 text-white md:text-[20px] text-base font-bold">Licensed U.S Provider</h1>
  <p className="md:text-[17px] text-base text-[#fff] opacity-[0.7]">Board-certified oversease every treatment plan</p>
</div>


      <div className="bg-primary rounded-tr-2xl pt-0 h-[300px]  md:h-[230px] p-6 flex flex-col items-start justify-center
   duration-500 ease-in-out transform hover:scale-110 hover:rounded-2xl  ">
        <Image src="/assets/images/icon-1.png" width={50} height={50} alt="icon" />
        <h3 className="mt-4 text-white text-base md:text-[20px] font-bold">HIPPA Compliant</h3>
        <p className="md:text-[17px] text-base text-[#fff] opacity-[0.7]">Your health is protected with the highest security standard</p>
      </div>

  <div className="bg-primary rounded-bl-2xl h-[300px]  md:h-[230px] pt-0 p-6 flex flex-col items-start justify-center
   duration-500 ease-in-out transform hover:scale-110 hover:rounded-2xl ">
  <Image src="/assets/images/icon-2.png" width={60} height={60} alt="icon" />
  <h3 className="mt-4 text-white text-base md:text-[20px] font-bold">Smart AI Guidence</h3>
  <p className="md:text-[17px] text-base text-[#fff] opacity-[0.7]">Personalized recommendation powered by advanced AI technology</p>
</div>


      <div className="bg-[#2E9E8B] rounded-br-2xl h-[300px]  md:h-[230px] pt-0 p-6 flex flex-col items-start justify-center
   duration-500 ease-in-out transform hover:scale-110 hover:rounded-2xl  ">
        <Image src="/assets/images/icon-1.png" width={50} height={50} alt="icon" />
        <h3 className="mt-4 text-white text-base md:text-[20px] font-bold">Personalized Plans</h3>
        <p className=" text-base md:text-[17px] text-[#fff] opacity-[0.7]">Treatment tailored specifically to your body, goals and lifestyle</p>
      </div>

    </div>
  )
}

export default TreatmentsCards
