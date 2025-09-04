import React from "react";

const cardsData = [
  {
    id: "01",
    title: "Answer few health questions",
    description: "Tell us about your goals, lifestyle and history, takes 2 minutes",
    step: "Step",
  },
  {
    id: "02",
    title: "Meet Your Licensed Provider",
    description: "A board-certified clinician will review and message you",
    step: "Step",
  },
  {
    id: "03",
    title: "Get Your Prescription",
    description: "If approved, your meds are deliverd discreetly.",
    step: "Step",
  },
  {
    id: "04",
    title: "Ongoing Support",
    description: "24/7 AI, licnsed provideers, and community support ",
    step: "Step",
  },
];

const Aboutcard = () => {
  return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-6 mx-4 my-10 gap-6 md:gap-3">
{cardsData.map((card)=>{
  return(
<div key={card.id} className="relative bg-white w-full h-[228px] py-6 pl-5 pb-5 group rounded-3xl overflow-hidden">
  
  <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#167363] transition-all duration-500 ease-in-out group-hover:h-full z-0"></div>

  {/* Card content */}
  <div className="relative z-10 flex flex-col h-full justify-between">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
        {card.title}
      </h3>
      <h3 className="text-7xl font-bold opacity-5 transition-colors duration-300 group-hover:text-white">
        {card.id}
      </h3>
    </div>

    <p className="opacity-70 text-sm mt-2 transition-colors duration-300 group-hover:text-white w-[225px]">
     {card.description}
    </p>

    <div className="flex justify-between mt-auto transition-colors duration-300 group-hover:text-white">
      <h3 className="font-medium text-white">{card.step}</h3>
      <h3 className="font-medium pr-2 text-[#FFDF28] group-hover:text-[#FFDF28]">{card.id}</h3>
    </div>
  </div>
</div>
  )
})}
   




</div>
    
    
  );
};

export default Aboutcard ;
