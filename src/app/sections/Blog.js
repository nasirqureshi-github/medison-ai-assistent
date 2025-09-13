import React from 'react'
import Blogswiper from '../components/Blog/Blogswiper'

const Blog = () => {
  return (
    <div className="2xl:container 2xl:mx-auto mt-30 md:pl-5 pl-0  ">
    <div className="px-6">
    <h1 className="text-[32px] font-bold capitalize">what Sets Medison Apart</h1>
    <p className="text-black text-[18px] pb-12 md:pb-0 md:w-1/2 w-full mb-2 md:mb-0">From licenced providers to AI-guided care, here&apos;s how we&apos;re redefinig modern wellness one personalized treatment at a time.</p>
    </div>
        <Blogswiper/>
    </div>
  )
}

export default Blog