import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="game_banner_component">
      <div className="game_banner_content">
        <div className="game_banner_text_field">
          <h3>
            Talent wins games, but teamwork and intelligence wins championships.
            ~ Michael Jordan
          </h3>
        </div>
        <div className="game_banner_img">
          <div className="banner_img">
            <Image
              src="https://i.ibb.co/tqLtr6R/hero-position-img.png"
              alt="Picture of the author"
              fill
              // width={400}
              // height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
