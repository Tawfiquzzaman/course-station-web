import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container py-10" style={{ width: "80%", margin: "auto"}}>
      <Slider {...settings}>
        <div>
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-[600px] w-full object-cover" src="/photography.jpg" alt="Photography" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Capture the Moment</h2>
              <p className="text-lg md:text-xl drop-shadow-md">Explore creativity through the lens of passion</p>
            </div>
          </div>
        </div>
         <div>
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-[600px] w-full object-cover" src="/computer.jpg" alt="Computer" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Code the Future</h2>
              <p className="text-lg md:text-xl drop-shadow-md">Unleash innovation through technology</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-[600px] w-full object-cover" src="/design.jpg" alt="Design" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Design with Impact</h2>
              <p className="text-lg md:text-xl drop-shadow-md">Shape ideas into stunning visuals</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-[600px] w-full object-cover" src="/present.jpg" alt="Presentation" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Present with Power</h2>
              <p className="text-lg md:text-xl drop-shadow-md">Deliver ideas that inspire and persuade</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-[600px] w-full object-cover" src="/paint.jpg" alt="Painting" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Paint Your Imagination</h2>
              <p className="text-lg md:text-xl drop-shadow-md">Bring your imagination to life with colors</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
