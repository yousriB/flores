import React, { useState, useEffect } from "react";
import { bg, bg2, bg3, bg4, bg5, bg6, bg7 } from "../assets";

const images = [bg, bg2, bg3, bg4, bg5, bg6, bg7]; // List of background images

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index to display
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 7000); //  seconds in milliseconds

    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, [currentImageIndex]);
  return (
    <div id="hero" className="text-white sm:h-[650px]">
      <div className="mb-0 mx-0 md:px-0 h-auto">
        <section className="background-radial-gradient mb-0 text-center lg:text-left">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-[0%] h-[500px]  sm:h-[650px]"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                  <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                    Transform Your Space with{" "}
                    <span className="text-blue-400 ">Flores®</span> <br />
                  </h2>
                  <p className="text-lg">
                    Elevate Your Cleaning Experience with Flores: Unleash the
                    Power of The Ultimate Cleaning Solution for a Fresh, Bright,
                    and Sparkling Clean Every Time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
