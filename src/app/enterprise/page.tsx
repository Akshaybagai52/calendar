import BannerSection from "@/components/enterpriseSections/bannerSection";
import Marquee from "../products/marquie";
import Card from "../../components/enterpriseSections/card"
import Footer from "@/components/homeSections/footer";
export default function EnterPrise() {
  
  return (
    <div className="mt-40">
      <BannerSection />
      <div className="container">
        <Marquee />
      </div>
      <Card />
      <Footer />
    </div>
  )
}
