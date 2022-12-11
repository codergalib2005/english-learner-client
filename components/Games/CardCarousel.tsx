import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
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
    <div className="container">
      <Swiper
        style={{ display: "flex", justifyContent: "center" }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          490: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="game_card">
              <div className="game_img">
                <Image src={game.img} alt="" width={200} height={220} />
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
