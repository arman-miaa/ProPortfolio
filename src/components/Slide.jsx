// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slide = () => {
  return (
    <div className="w-full max-w-md">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-64"
      >
        <SwiperSlide className="w-48">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio item 1"
          />
        </SwiperSlide>
        <SwiperSlide className="w-48">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio item 2"
          />
        </SwiperSlide>
        <SwiperSlide className="w-48">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio item 3"
          />
        </SwiperSlide>
        <SwiperSlide className="w-48">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio item 4"
          />
        </SwiperSlide>
        <SwiperSlide className="w-48">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Portfolio item 5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
