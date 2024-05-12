import React from "react";
import { styles } from "../../styles/styles";
import ReviewCard from "./ReviewCard";
import { FaQuoteLeft } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ReviewsSwiper from "./ReviewsSwiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { reviews } from "../../constants/reviews";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 3,
    },
  },
};

const Reviews = () => {
  const swiper = useSwiper();
  return (
    <section
      className={`py-6 lg:py-20 ${styles.paddingHorizontal} ${styles.bgBody} flex flex-col items-center gap-y-10`}
    >
      <div className="flex flex-col gap-y-6">
        <h1 className="text-7xl font-semibold text-center lg:leading-[80px]">
          What our happy <br /> customer say
        </h1>
        <p className="text-base text-gray-400 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          consectetur maiores, officiis itaque <br /> porro odit inventore
          ratione minus vitae quis possimus repellat cum laboriosam <br />{" "}
          laborum accusamus? Ipsa commodi distinctio aspernatur?
        </p>
      </div>
      <div className="w-full relative">
        <Swiper {...sliderSettings} className="">
          {/* <SliderButtons /> */}
          <div className="">
            {reviews.map((review, index) => {
              return (
                <SwiperSlide
                  className="flex items-center justify-center"
                  key={index}
                >
                  <ReviewCard description={review.review} name={review.name} />
                </SwiperSlide>
              );
            })}
          </div>
          <div className="w-full flex justify-center items-center gap-6 mt-12">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center border border-black hover:border-white bg-transparent hover:bg-black transition-all duration-300 group p-4"
              onClick={() => swiper.slidePrev()}
            >
              <GoArrowLeft className="text-black group-hover:text-white transition-all duration-300 w-full h-full" />
            </button>
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center border border-black hover:border-white bg-transparent hover:bg-black transition-all duration-300 group p-4"
              onClick={() => swiper.slideNext()}
            >
              <GoArrowRight className="text-black group-hover:text-white transition-all duration-300 w-full h-full" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

export const SliderButtons = () => {
  const swiper = useSwiper();
  const slideNext = swiper.slideNext();
  const slidePrev = swiper.slidePrev();
  return (
    <div className="w-full flex justify-center items-center gap-6 mt-6">
      <button
        className="w-12 h-12 rounded-full flex items-center justify-center border border-black hover:border-white bg-transparent hover:bg-black transition-all duration-300 group p-4"
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft className="text-black group-hover:text-white transition-all duration-300 w-full h-full" />
      </button>
      <button
        className="w-12 h-12 rounded-full flex items-center justify-center border border-black hover:border-white bg-transparent hover:bg-black transition-all duration-300 group p-4"
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight className="text-black group-hover:text-white transition-all duration-300 w-full h-full" />
      </button>
    </div>
  );
};
