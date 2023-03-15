import React, { useState, useEffect } from "react";
import "../../style/screens/Home.scss";

const images = [
  "/images/delivery01.jpeg",
  "/images/delivery04.jpeg",
  "/images/delivery05.jpeg",
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[index]}
        alt="slider, image, bike, human, system delivery"
      />
    </div>
  );
};

export default Carousel;
