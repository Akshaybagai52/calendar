import React from 'react';
import Image from 'next/image'

interface MarqueeItemProps {
  src: string;
  alt: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, alt }) => {
  return (
    <div className="marquee-item">
      <Image src={src} alt={alt} />
    </div>
  );
};  

export default MarqueeItem;
