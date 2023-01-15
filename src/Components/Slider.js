import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Silder = () => {
  const slides = [];
  let images = [
    "/images/image 3 (1).png",
    "images/image 3 (2).png",
    "images/image 3.png",
    "images/NFT Frame Art 1 (1).png",
    "images/NFT Frame Art 1 (2).png",
    "images/NFT Frame Art 1.png",
    "images/NFT Frame Art 1 (1).png",
  ];
  for (let i = 0; i < images.length; i++) {
    slides.push(
      <SwiperSlide
        key={`slide-${i}`}
        style={{ listStyle: "none", width: "400px" }}
      >
        <div className="slide">
          <img src={images[i]} alt="img" />
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="p-10">
      <div className="project-section">
        <h3 className="project-heading">Project you'll love</h3>
        <a href="#"> more</a>
      </div>
      <Swiper
        id="swiper"
        virtual
        slidesPerView={3}
        // slidesPerColumn={2}
        // slidesPerColumnFill="row"
        spaceBetween={20}
        // slidesPerGroup={2}
        // autoplay
        // loop
        onReachEnd={() => {
          console.log("reach end");
          const tmp = slides.unshift();
          slides.push(tmp);
        }}
        navigation
        pagination
      >
        {slides}
      </Swiper>
    </div>
  );
};
export default Silder;
