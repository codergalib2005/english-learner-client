import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination, FreeMode } from "swiper";

const CardCarousel = () => {
  return (
    <div className="game_card_carousel_component">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>
            {" "}
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloremque, magnam, repudiandae obcaecati ab vitae beatae quam
            quidem minus officiis, esse nulla earum veritatis qui maxime autem
            explicabo ratione doloribus!
          </h3>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardCarousel;
