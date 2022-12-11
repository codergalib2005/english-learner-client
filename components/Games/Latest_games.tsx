import React from "react";
import Latest_game_card from "./Latest_game_card";

const Latest_games = () => {
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
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
      des: "play continue until you win. play continue until you win. play continue!",
    },
  ];
  return (
    <div className="latest_games_container">
      <h3>Latest tests grow your skill!</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {games.map((game) => (
            <Latest_game_card key={game.id} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest_games;
