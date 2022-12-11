import Image from "next/image";
import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { TiStopwatch } from "react-icons/ti";

type PropsType = {
  img: string;
  available: string;
  last_play: number;
  qoin: number;
  title: string;
  des: string;
};
const Latest_game_card = ({
  img,
  available,
  last_play,
  qoin,
  title,
  des,
}: PropsType) => {
  return (
    <div className="game_card">
      <div className="i_button">
        <AiOutlineInfo style={{ fontWeight: 900 }} />{" "}
      </div>

      <div className="game_img">
        <Image
          style={{ borderRadius: "5px 5px 0px 0px" }}
          src={img}
          alt=""
          width={232}
          height={130}
        />
      </div>
      <p className="game_available_for">{available}</p>
      <div className="last_played">
        <p>
          {" "}
          <TiStopwatch style={{ fill: "#fff" }} /> {last_play} hour left
        </p>
        <p>
          <GiTwoCoins style={{ fill: "#eeb20b" }} /> {qoin}
        </p>
      </div>
      <div className="divider"></div>
      <div className="game_text">
        <p>{title}</p>
        <span>{des}</span>
      </div>
      <div className="play_button_sec">
        <button className="play_button">Start Now</button>
      </div>
    </div>
  );
};

export default Latest_game_card;
