import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="game_banner_component">
      <div className="game_banner_img">
        {/* <Image
          src="https://i.ibb.co/x8J1x2D/game-banner.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
      </div>
      <div className="game_banner_text_field">
        <h3>
          Talent wins games, but <br /> teamwork and intelligence <br /> wins
          championships. <br /> ~ Michael Jordan
        </h3>
      </div>
    </div>
  );
};

export default Banner;
