import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const slides = [
    {
      image: "/photography.jpg",
      title: "Capture the Moment",
      subtitle: "Explore creativity through the lens of passion",
    },
    {
      image: "/computer.jpg",
      title: "Code the Future",
      subtitle: "Unleash innovation through technology",
    },
    {
      image: "/design.jpg",
      title: "Design with Impact",
      subtitle: "Shape ideas into stunning visuals",
    },
    {
      image: "/present.jpg",
      title: "Present with Power",
      subtitle: "Deliver ideas that inspire and persuade",
    },
    {
      image: "/paint.jpg",
      title: "Paint Your Imagination",
      subtitle: "Bring your imagination to life with colors",
    },
  ];

  return (
    <div className="slider-container py-10" style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative rounded-2xl overflow-hidden">
              <img className="h-[600px] w-full object-cover" src={slide.image} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-4 text-center">
                <motion.h2
                  className="text-4xl eduvicfont md:text-5xl font-bold mb-4 drop-shadow-lg"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={activeSlide === index ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl drop-shadow-md mt-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={activeSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
