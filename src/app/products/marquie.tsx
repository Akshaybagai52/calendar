
import MarqueeItem from "./marqueeItem";
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
    { src: 'https://logodix.com/logo/698064.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698043.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698024.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698025.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698051.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698053.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698054.jpg', alt: '' },
    { src: 'https://logodix.com/logo/698057.jpg', alt: '' },
  ];

  return (
    <div className="marquee">
      <div className="marquee-content">
        {images.map((image, index) => (
          <MarqueeItem key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
