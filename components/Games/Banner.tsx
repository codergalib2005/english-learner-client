import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="game_banner_component">
      <div className="game_banner_content">
        <div className="game_banner_text_field">
          <h3>
            Talent wins games, but teamwork and intelligence <br /> wins
            championships. <br /> ~ Michael Jordan
          </h3>
        </div>
        <div className="game_banner_img">
          <Image
            className="banner_img"
            src="https://i.ibb.co/tqLtr6R/hero-position-img.png"
            alt="Picture of the author"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
