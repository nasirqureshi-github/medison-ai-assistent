import Card from "../components/Hero/Card"

const Hero = () => {
  return (
    <div className="w-full md:min-h-screen md:h-[915px] h-[700px] bg-[url('/assets/images/bg-imag.jpg')] bg-cover md:bg-center bg-no-repeat relative bg-position-[center_right_-11rem] container mx-auto ">
      <div className="absolute inset-0 flex flex-col justify-center md:items-start items-center text-white px-4 md:px-10 mt-20 md:mt-0">
        
        {/* Heading */}
        <div className="text-left w-full">
   <div className="relative md:h-14 h-9 overflow-hidden">
  <div className="text-carousel">
    <h1 className="text-white text-3xl sm:text-3xl md:text-[52px] font-bold pb-2">Proven Weight loss,</h1>
    <h1 className="text-white text-3xl sm:text-3xl md:text-[52px] font-bold">Proven Weight loss,</h1>
     <h1 className="text-white text-3xl sm:text-3xl md:text-[52px] font-bold pt-2">Intimate care</h1>
  </div>
</div>
  <h1 className="text-white text-3xl sm:text-3xl md:text-[52px] font-bold leading-none">
            Meets Personalized <br className="hidden md:block" /> Wellness
          </h1>
        </div>

        {/* Paragraph & Button */}
        <div className="flex flex-col gap-6 mt-6 items-center md:items-start">
          <p className="text-white text-sm sm:text-base md:text-lg  ">
            Semaglutide &amp; Tirzepitide programs tailored to your body 
            <br className="hidden md:block"/>
            and goals. Start today from just $195 for the first month
          </p>
          <button className="px-6 py-2 w-[240px] md:w-[260px] h-[60px] md:h-[60px] bg-white rounded-full text-primary font-bold cursor-pointer text-base">
            Get started
          </button>
        </div>

        {/* Card Section */}
        <div className="mt-10 w-full md:max-w-max max-w-sm">
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Hero

