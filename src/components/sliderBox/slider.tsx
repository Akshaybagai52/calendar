"use client"
import React,{useEffect,useState} from 'react'
import './slider.css';
export const SlickSlider = () => {
    const [currentIndex, setCurrentIndex] =useState<number>(0);
    const totalSlides = 4; // Change this value based on the total number of slides
  
    const goToSlide = (index:number) => {
      setCurrentIndex(index);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, [currentIndex, totalSlides]);
    
  return (
    <>
      {/* <h1>Our team</h1> */}
      <div className="tarkikComandSlider flex ">
      {[...Array(totalSlides)].map((_, index) => (
        <article
          key={index}
          className={
            index === currentIndex
              ? 'comandSlider__item active bg-slate-50 w-[100%]'
              : 'comandSlider__item bg-red-600 w-[100%]'
          }
          onClick={() => goToSlide(index)}
        >
          {/* Your slide content */}
          <header>
            {/* Header content */}
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/suputnik.png"
            alt="user1"
          />
     
          <div className="comandSlider__item_contact">
            <h1>hhh</h1>
            <h1>ttt</h1>
            <h1>hhggh</h1>
            <h1>hbbhh</h1>
            <h1>hhrrhh</h1>
            <h1>hhh</h1>
            <h1>hhiiih</h1>
            <h1>hhmmmh</h1>
          </div>
        </article>
 ))}
        {/* <article className="comandSlider__item">
          <header>
            <p className="comandSlider__item_name">Nelson Tyler</p>
            <p className="comandSlider__item_status">Developer</p>
            <a
              href="mailto:prokop.romanski@gmail.com"
              className="comandSlider__item_sendMail"
            ></a>
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/suputnik.png"
            alt="user1"
          />
          <div className="comandSlider__item_contact">
            <span>Phone:</span> +1-202-555-0114
          </div>
          <div className="comandSlider__item_contact">
            <span>Mail:</span> prokop.romanski@gmail.com
          </div>
          <div className="comandSlider__item_contact">
            <span>Site:</span> development.soul.com
          </div>
        </article>
        <article className="comandSlider__item">
          <header>
            <p className="comandSlider__item_name">Nelson Tyler</p>
            <p className="comandSlider__item_status">Developer</p>
            <a
              href="mailto:prokop.romanski@gmail.com"
              className="comandSlider__item_sendMail"
            ></a>
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/ufo.png"
            alt="user1"
          />
          <div className="comandSlider__item_contact">
            <span>Phone:</span> +1-202-555-0114
          </div>
          <div className="comandSlider__item_contact">
            <span>Mail:</span> prokop.romanski@gmail.com
          </div>
          <div className="comandSlider__item_contact">
            <span>Site:</span> development.soul.com
          </div>
        </article>

        <article className="comandSlider__item">
          <header>
            <p className="comandSlider__item_name">Nelson Tyler</p>
            <p className="comandSlider__item_status">Developer</p>
            <a
              href="mailto:prokop.romanski@gmail.com"
              className="comandSlider__item_sendMail"
            ></a>
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/telescope.png"
            alt="user1"
          />
          <div className="comandSlider__item_contact">
            <span>Phone:</span> +1-202-555-0114
          </div>
          <div className="comandSlider__item_contact">
            <span>Mail:</span> prokop.romanski@gmail.com
          </div>
          <div className="comandSlider__item_contact">
            <span>Site:</span> development.soul.com
          </div>
        </article>

        <article className="comandSlider__item">
          <header>
            <p className="comandSlider__item_name">Nelson Tyler</p>
            <p className="comandSlider__item_status">Developer</p>
            <a
              href="mailto:prokop.romanski@gmail.com"
              className="comandSlider__item_sendMail"
            ></a>
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/suputnik.png"
            alt="user1"
          />
          <div className="comandSlider__item_contact">
            <span>Phone:</span> +1-202-555-0114
          </div>
          <div className="comandSlider__item_contact">
            <span>Mail:</span> prokop.romanski@gmail.com
          </div>
          <div className="comandSlider__item_contact">
            <span>Site:</span> development.soul.com
          </div>
        </article>

        <article className="comandSlider__item">
          <header>
            <p className="comandSlider__item_name">Nelson Tyler</p>
            <p className="comandSlider__item_status">Developer</p>
            <a
              href="mailto:prokop.romanski@gmail.com"
              className="comandSlider__item_sendMail"
            ></a>
          </header>
          <img
            className="comandSlider__item_photo"
            src="https://tarkikromanski.github.io/files/telescope.png"
            alt="user1"
          />
          <div className="comandSlider__item_contact">
            <span>Phone:</span> +1-202-555-0114
          </div>
          <div className="comandSlider__item_contact">
            <span>Mail:</span> prokop.romanski@gmail.com
          </div>
          <div className="comandSlider__item_contact">
            <span>Site:</span> development.soul.com
          </div>
        </article> */}
      </div>
    </>
  );
};
