import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { AiOutlineInfo } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { TiStopwatch } from "react-icons/ti";

// import required modules
import { FreeMode } from "swiper";
import Image from "next/image";

const CardCarousel = () => {
  const games = [
    {
      id: 1,
      title: "Honda Amar",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Daily",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 2,
      title: "Bus & Jatri",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Weekly",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 3,
      title: " Knowledge",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Daily",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 4,
      title: "Math Contest",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Weekly",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 5,
      title: "Taxi show",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Daily",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 6,
      title: "You & me ",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Weekly",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 7,
      title: "Private Car",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Daily",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
    },
    {
      id: 8,
      title: "Car racing ",
      img: "https://i.ibb.co/MD3m5bL/3726585.jpg",
      available: "Weekly",
      qoin: 45,
      last_play: 2,
      status: "lock",
      label_count: 2,
      des: "play continue until you win",
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
              <div className="i_button">
                <AiOutlineInfo style={{ fontWeight: 900 }} />{" "}
              </div>

              <div className="game_img">
                <Image
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                  src={game.img}
                  alt=""
                  width={224}
                  height={130}
                />
              </div>
              <p className="game_available_for">{game.available}</p>
              <div className="last_played">
                <p>
                  {" "}
                  <TiStopwatch style={{ fill: "#fff" }} /> {game.last_play} hour
                  left
                </p>
                <p>
                  <GiTwoCoins style={{ fill: "#eeb20b" }} /> {game.qoin}
                </p>
              </div>
              <div className="divider"></div>
              <div className="game_text">
                <p>{game.title}</p>
                <span>{game.des}</span>
              </div>
              <div className="play_button_sec">
                <button className="play_button">Start Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
