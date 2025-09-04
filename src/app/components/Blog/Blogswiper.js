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
    image: "/assets/images/post-img-1.png",
    title: "Why choose Madison Meds?",
    description1: "Madison Meds delivers a smarter, simpler approach to weight loss and anti-aging. We combine cutting-edge AI technology with licensed medical providers to create fully personalized treatment plans—without the wait, the hassle, or the guesswork. Our compounded medications are formulated by top-tier U.S. pharmacies and tailored to your body’s unique needs. With fast, discreet delivery and ongoing support, we make it easier than ever to feel better, look younger, and reach your health goals—on your terms. Madison Meds is where modern medicine meets intelligent care.",
  },
  {
    id: 2,
    image: "/assets/images/post-img-2.png",
    title: "Prescribed by licensed providers",
    description1: "At Madison Meds, every prescription is thoughtfully tailored by licensed medical professionals who evaluate your unique health profile to create a personalized treatment plan. Experience expert care that puts your well-being first",
  },
  {
    id: 3,
    image: "/assets/images/post-img-3.png",
    title: "Private, Personalized Care 100% Online",
    description1: "Experience expert care without ever stepping into a doctor's office. Madison Meds offers a fully virtual experience—from intake to prescription delivery—bringing customized, high-quality healthcare straight to your door, wherever you are.",
  },
  {
    id: 4,
    image: "/assets/images/post-img-4.jpg",
    title: "Certified US-based pharmacies",
    description1: "We collaborate with certified U.S.-based pharmacies nationwide to ensure your medications are compounded to the highest quality and safety standards. Every dose is prepared with precision—so you can feel confident in your treatment, every step of the way.",
  },
   {
    id: 5,
    image: "/assets/images/post-img-5.jpg",
    title: "Clinically Proven Treatments",
    description1: "Our therapies are powered by scientifically validated medications chosen for their safety, efficacy, and results. Each ingredient is backed by clinical research to support your health goals with confidence and credibility.",
  },
];

const Blogswiper = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full px-6">
      {/* Custom Navigation */}
      <div className="absolute -top-12 right-6 flex gap-2 z-10">
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
          320: { slidesPerView: 1, spaceBetween: 6 },
          768: { slidesPerView: 2.3, spaceBetween: 15 },
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
          <SwiperSlide key={item.id}>
            <div className="bg-white h-[534px] rounded-2xl overflow-hidden flex flex-col mt-10 mx-auto">
              {/* Image */}
              <div className="relative w-full h-[309px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                <p className="text-sm text-gray-700">{item.description1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogswiper;
