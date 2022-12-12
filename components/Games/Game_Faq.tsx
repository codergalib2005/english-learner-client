import React, { useState } from "react";
import Game_according_card from "./Game_according_card";

const Game_Faq = () => {
  const [active, setActive] = useState<string>("title1");
  return (
    <div className="game_faq_container">
      <div>
        <h3 className="faq_sec">FAQ!</h3>
      </div>
      <Game_according_card />
      <Game_according_card />
      <Game_according_card />
      <Game_according_card />
      <Game_according_card />
      <Game_according_card />
    </div>
  );
};

export default Game_Faq;
