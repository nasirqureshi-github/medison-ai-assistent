// components/Marquee.js
const murqeeText=[
    {id:1, text:"100% Online"},
     {id:2, text:"Free and discrete shipping"},
     {id:3, text:"Medical Doctor and Social Support"},
     {id:4, text:"Hippa Compliant"},
     {id:5, text:"No hidden Fees"},
     {id:6, text:"Made in USA"},
     {id:7, text:"Legal Script compliant"},
     {id:8, text:"AI"},
     {id:9, text:"FDA-registred pharmacies"},
     
]

const Marquee = () => {
  return (
    <div className="bg-[rgba(28,140,120,0.17)] overflow-hidden flex md:mt-20 mt-40 py-3 select-none container mx-auto" >
    <marquee behavior="alternate" scrollamount="10">
    <div className="flex gap-14" >
    {murqeeText.map((murqee)=>{
  return(
     <div  key={murqee.id}>
     <h2 className="text-sm bg-white px-3 py-4 rounded-2xl">{murqee.text}</h2> 
     </div>
    
  )
    })}
    </div>
    </marquee>

    </div>
  );
};

export default Marquee;
