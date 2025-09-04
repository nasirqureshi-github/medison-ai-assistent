import React from 'react'
import Hero from './sections/Hero'
import Marquee from './components/Textmarqee'
import About from './sections/About'
import WeightlossTreatments from './sections/WeightlossTreatments'
import Healthinsight from './sections/Healthinsight'
import Blog from './sections/Blog'
import Testimonial from './sections/Testimonial'
import Faqs from './sections/Faqs'

const Home = () => {
  return (
    <div>
   
    <Hero/>
    <Marquee/>
    <About/>
    <WeightlossTreatments/>
    <Healthinsight/>
    <Blog/>
    <Testimonial/>
    <Faqs/>
    </div> 
  )
}

export default Home