
import MarqueeItem from "./marqueeItem";
import Mercedise_Benz from "../../assets/Mercedes-Benz.jpg"
import "../products/style.css"
const Marquee = () => {
  const images = [
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
    { src: {Mercedise_Benz}, alt: '' },
  ];

  return (
    <div className="marquee mt-[40px]">
      <div className="marquee-content">
        {images.map((image, index) => (
          <MarqueeItem  key={index} src={image.src} alt={image.alt} height={100} width={100} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
