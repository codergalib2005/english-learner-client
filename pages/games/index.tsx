import React from "react";
import Banner from "../../components/Games/Banner";
import CardCarousel from "../../components/Games/CardCarousel";
import Game_Faq from "../../components/Games/Game_Faq";
import Hot_news from "../../components/Games/Hot_news";
import Latest_games from "../../components/Games/Latest_games";
import Header from "../../components/shared/Header/Header";

const Games = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Header />
      <Banner />
      <CardCarousel />
      <Latest_games />
      <Hot_news />
      <Game_Faq />
    </div>
  );
};

export default Games;
