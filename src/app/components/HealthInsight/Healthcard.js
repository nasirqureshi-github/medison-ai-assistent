import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const postdata=[
      {image:"/assets/images/haalth-insight-img-1.png",
        title:"Understanding Semaglutide: Your Complete Guide",btntext:" Weightloss", description:" Learn everything you need to know about this breakthrough weight loss medication and how it...", doctor:"DR. Sarah Jhoson", date:"Jan 15, 2025"  },
        {image:"/assets/images/haalth-insight-img-2.png",
        title:"The Science Behind Tirzepatide Success",btntext:" Research", description:"Discover how this dual-action medication is revolutionizing weight management with superior... ", doctor:"DR. Sarah Jhoson", date:"Jan 15, 2025"  },

        {image:"/assets/images/haalth-insight-img-3.png",
        title:"Anti-Aging with NAD+ Therapy",btntext:"Anti-Aging", description:"Explore how NAD+ supplementation can boost cellular energy and support healthy aging...", doctor:"DR. Sarah Jhoson", date:"Jan 15, 2025"  },
        
        {image:"/assets/images/haalth-insight-img-4.png",
        title:"Building Healthy Habits That Last",btntext:"Lifestyle", description:"Simple strategies to create sustainable lifestyle changes that support your wellness journey....",doctor:"DR. Sarah Jhoson", date:"Jan 15, 2025"  }
    
]

const Healthcard = () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-2 px-4 gap-6'>
  {postdata.map((post)=>{
    return(
<div key={post.title} className="bg-white rounded-3xl p-6 w-[400px] md:w-[614px] h-[630px] group overflow-hidden ">
  {/* Image wrapper */}
  <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:h-[333px]">
    <Image
      src={post.image}
      alt="img"
      fill
      sizes="100%"
      className="object-cover transition-all duration-500"
    />

    {/* Overlay content (button + heading) */}
    <div className="absolute inset-0 flex flex-col justify-end items-start p-6 transition-opacity duration-500 group-hover:opacity-0">
      <button className="bg-[rgba(28,140,120,0.7)] text-white px-6 py-3 rounded-full font-medium mb-4 cursor-pointer">
        {post.btntext}
      </button>
      <h1 className="md:text-2xl text-xl font-bold text-white drop-shadow-lg max-w-[80%]">
        {post.title}
      </h1>
    </div>
  </div>

  {/* Below content – hidden by default, shown on hover */}
  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[400px]">
    <button className="bg-[rgba(28,140,120,0.18)] px-6 py-3 rounded-full font-medium mt-4 cursor-pointer">
      {post.btntext}
    </button>

    <hr className="mt-4 border-0 h-[2px] bg-[rgb(0,0,0,0.10)]" />

    <h1 className="md:text-2xl text-xl font-bold mt-4">
     {post.title}
    </h1>

    <p className="text-sm mt-2">
     {post.description}
    </p>

    <div className="flex justify-between mt-4">
      <div className="flex items-center gap-2">
        <Icon
          icon="tabler:user"
          width="24"
          height="24"
          className="text-[#003E45]"
        />
        <p className="text-sm text-[#0C0C1E]">{post.doctor}</p>
      </div>
      <div className="flex items-center gap-2">
        <Icon
          icon="uit:calender"
          width="18"
          height="18"
          className="text-[#003E45]"
        />
        <p className="text-sm">{post.date}</p>
      </div>
    </div>
  </div>
</div>

    )
  })}





    </div>
  )
}

export default Healthcard