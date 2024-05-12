import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const ReviewsSwiper = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewsSwiper;
