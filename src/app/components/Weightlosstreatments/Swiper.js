"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";

const treatments = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    title: "Semaglutide",
    description1: "Popular GPL-1 medication for effective weight management",
    description2: "First Month",
    price: "$195",
    type: "Ongoing",
    label: "$295/m",
    features: ["Reduce appitite naturally", "Proveen clinical result", "FDA-approved compound"],
    bgLieargradient:"bg-[linear-gradient(156deg,#F8E4A3_16.76%,#C7A741_85.37%)]"
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    title: "Trizepatide",
    description1: "Advanced dual-action medication for enhanced results",
    description2: "First Month",
    price: "$245",
    type: "Ongoing",
    label: "$345/m",
    features: ["Dual harmone pathway", "Superior weight loss", "improved metabolism"],
    bgLieargradient:"bg-[linear-gradient(156deg,#D8987F_15.57%,#996854_84.33%)]"
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    title: "NDA+",
    description1: "Cellular regeneration and anti-aging support",
    description2: "First Month",
    price: "$329",
    type: "ongoing",
    label: "$229/m",
    features: ["Boosts cellular energy", "Anti-Aging properties", "Improved sleep quality"],
    bgLieargradient:"bg-[linear-gradient(180deg,#2ADDD3_0%,#137D77_100%)]"
  },
  {
    id: 4,
    image: "/assets/images/product-4.png",
    title: "Sermorelin",
    description1: "Growth hormone therapy for vitality and wellness",
    description2: "First Month",
    price: "$259",
    type: "ongoing",
    label: "$259/m",
    features: ["Natural HGH stimulation", "Enhanced recovery", "Improved sleep quality"],
    bgLieargradient:"bg-[linear-gradient(180deg,#62C1F6_0%,#2682B7_100%)]"
  },
 
];

const WeightLossSwiper = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className=" relative w-full px-6 ">
      {/* Custom Navigation */}
      <div className="absolute -top-12 right-6 flex gap-2 z-10 ">
        <button
          className={`swiper-button-prev-custom p-3 rounded-full shadow-md transition cursor-pointer ${
            isBeginning
              ? "bg-[#1CBC78]/[0.14] text-white cursor-not-allowed"
              : "bg-[#167363] text-white"
          }`}
          disabled={isBeginning}
        >
          <Icon icon="icon-park-outline:arrow-left" width="24" height="24" />
        </button>
        <button
          className={`swiper-button-next-custom p-3 rounded-full shadow-md transition cursor-pointer ${
            isEnd
              ? "bg-[#1CBC78]/[0.14] text-white cursor-not-allowed"
              : "bg-[#167363] text-white"
          }`}
          disabled={isEnd}
        >
          <Icon icon="icon-park-outline:arrow-right" width="24" height="24" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerGroup={1} 
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 6}, 
          768: { slidesPerView: 2.09, spaceBetween: 6 },
          1024: { slidesPerView: 2.8, spaceBetween: 6 },
          1200: { slidesPerView: 3.2, spaceBetween: 6 },
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="pt-10 px-20"
      >
        {treatments.map((item) => (
          <SwiperSlide key={item.id} >
            <div className={`${item.bgLieargradient} shadow-[0_4px_40px_0_rgba(0,0,0,0.08)] rounded-2xl  py-8 px-8 flex flex-col items-center text-center mt-6 w-[333px] h-[679px]`}>
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-auto h-[200px] object-cover rounded-xl float-animation"
                  priority
                />
              </div>
    
              <h1 className="text-2xl font-semibold mb-2">{item.title}</h1>
              <p className="text-sm text-gray-700">{item.description1}</p>
              <div className="flex flex-col gap-6 w-full">
              <div className="bg-[rgba(247,247,247,0.38)] px-2 py-2 w-full rounded-2xl mt-5">
              <p className="text-gray-600">{item.description2}</p>
              <p className="font-bold text-3xl">{item.price}</p>
              <p className="text-base text-gray-700">{item.type}</p>
              <p className="text-base font-semibold ">{item.label}</p>
              </div>
             
              
              <ul className="text-sm text-gray-700 mb-3 space-y-2"> 
                {item.features.map((feature, idx) => (
                 
                  <li key={idx} className="flex items-center gap-2  ml-10">
                    <Icon
                      icon="simple-line-icons:check"
                      className="text-[#1C822B] drop-shadow-[0_0_1px_#1C822B]"
                      width="18"
                      height="18"
                    />
                    <p className="text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              <button className="bg-white text-primary px-4 py-4 rounded-4xl w-full  cursor-pointer font-bold">
                Learn More
              </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeightLossSwiper;
