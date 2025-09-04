import Prescription from "../components/Weightlosstreatments/Prescription"
import WeightLossSwiper from "../components/Weightlosstreatments/Swiper"
import Treatments from "../components/Weightlosstreatments/Treatments"

const WeightlossTreatments = () => {
  return (
    <div className=" mt-30 md:pl-5 pl-0 container mx-auto" id='WeightlossTreatments'>
    <div className="px-6">
    <h1 className="text-[32px] font-bold capitalize">choose yor path to wellness</h1>
    <p className="text-[#717171] text-[18px] pb-12 lg:pb-0">Personalized treatment options designed to hlep you achive yourhelath goals safely and effectively.</p>
    </div>
        <WeightLossSwiper/>
        <Prescription/>
        <Treatments/>
    </div>
  )
}

export default WeightlossTreatments