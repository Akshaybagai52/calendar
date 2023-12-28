
import MarqueeItem from "./marqueeItem";
import Mercedise_Benz from "../../assets/Mercedes-Benz.jpg"
import "../products/style.css"
const Marquee = () => {
  const images = [
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698056.jpg', alt: '' },
  ];

  return (
    <div className="marquee mt-[40px]">
      <div className="marquee-content">
        {images.map((image, index) => (
          <MarqueeItem  key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
