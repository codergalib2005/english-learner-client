import React from "react";
import Banner from "../../components/Games/Banner";
import CardCarousel from "../../components/Games/CardCarousel";
import Latest_games from "../../components/Games/Latest_games";
import Header from "../../components/shared/Header/Header";

const Games = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CardCarousel />
      <Latest_games />
    </div>
  );
};

export default Games;
