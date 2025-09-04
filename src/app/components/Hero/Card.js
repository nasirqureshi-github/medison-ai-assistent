"use client"

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
const carditems=[
    {id:1, img:"/assets/images/product-1.png", title:"Semaglitide", text:"Starting at $ 195/m", btntext:"Get started"},
    {id:2, img:"/assets/images/product-2.png" ,title:"Trizepatide", text:"Starting at $ 195/m", btntext:"Get started"},
    {id:3, img:"/assets/images/product-3.png", title:"NAD+", text:"Starting at $ 195/m", btntext:"Get started"},
    {id:4, img:"/assets/images/product-4.png", title:"Sermorelin", text:"Starting at $ 195/m", btntext:"Get started"},
]

const Card = () => {
  return (
    <div className='relative top-20 md:top-40 gap-3 grid grid-cols-2 md:grid-cols-4'>

{carditems.map((item)=>{
    return(
<div key={item.id} className='inline-flex flex-col py-2 px-3 justify-center items-center rounded-2xl bg-[#FFF] text-black border border-[rgba(0,0,0,0.08)]'>
  <div className='bg-primary rounded-xl w-24 h-24 flex justify-center items-center py-3'>
    <Image 
      src={item.img} 
      width={100} 
      height={100} 
      alt="product" 
      className='w-full h-full object-contain'
      priority
    />
  </div>
  <div className='md:text-left text-center mt-2'>
    <h1 className='text-sm'>{item.title}</h1>
    <p className='text-xs opacity-70'>{item.text}</p>
    <Link href=""><p className='underline text-sm text-primary'>{item.btntext}</p></Link>
  </div> 
  </div>  
    )
})}
 
    </div>
  )
}

export default Card