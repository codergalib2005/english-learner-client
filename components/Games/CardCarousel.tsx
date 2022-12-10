import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination, FreeMode } from "swiper";
import Image from "next/image";

const CardCarousel = () => {
  const games = [
    {
      id: 1,
      title: "Honda Amar",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 2,
      title: "Bus & Jatri",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 3,
      title: "Normal Knowledge",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 4,
      title: "Math Contest",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 5,
      title: "Taxi show",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 6,
      title: "You & me ",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 7,
      title: "Private Car",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
    {
      id: 8,
      title: "Car racing ",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
    },
  ];
  return (
    <div className="game_card_carousel_component">
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="game_card">
              <div className="game_img">
                <Image src={game.img} alt="" width={300} height={300} />
              </div>
              <div className="game_text">
                <h2>{game.title}</h2> <h2>{game.title}</h2>{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
