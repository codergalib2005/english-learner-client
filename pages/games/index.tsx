import React from "react";
import Banner from "../../components/Games/Banner";
import CardCarousel from "../../components/Games/CardCarousel";
import Header from "../../components/shared/Header/Header";

const Games = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CardCarousel />
    </div>
  );
};

export default Games;
