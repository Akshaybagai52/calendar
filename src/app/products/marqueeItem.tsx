import React from 'react';

interface MarqueeItemProps {
  src: string;
  alt: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, alt }) => {
  return (
    <div className="marquee-item">
      <img src={src} alt={alt} />
    </div>
  );
};  

export default MarqueeItem;
