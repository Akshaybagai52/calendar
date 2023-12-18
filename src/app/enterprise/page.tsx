import BannerSection from "@/components/enterpriseSections/bannerSection";
import Marquee from "../products/marquie";
import Card from "../../components/enterpriseSections/card"
import Footer from "@/components/homeSections/footer";
import BottomSection from "@/components/enterpriseSections/bottomSection";
import ContactSales from "@/components/enterpriseSections/contactSales";

export default function EnterPrise() {

  return (
    <div className="mt-40 sm:container">
      <BannerSection />
      <div className="container">
        <Marquee />
      </div>
      <Card />
      <BottomSection />
      <ContactSales />
      <Footer />
    </div>
  )
}
