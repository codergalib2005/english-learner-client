import React, { useState } from "react";


const Game_according_card = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div className="game_faq_container_card">
      <div className="according_heading">
        <div className="according_title">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            nihil accusamus odio provident?
          </p>
          {state ? (
            <span onClick={() => setState(!state)}>-</span>
          ) : (
            <span onClick={() => setState(!state)}>+</span>
          )}
        </div>
      </div>
      <div className={state ? "show" : "" + "according_content"}>
        <div className="according_texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            impedit ipsam laboriosam iure nulla commodi ut, dolorem a possimus,
            doloremque labore eligendi? Nesciunt eaque nihil officiis a sunt
            veniam qui magnam odio magni laudantium maiores tempora, non nostrum
            atque tenetur sint suscipit dolor ea vitae recusandae, quae dicta.
            Ab quae consequuntur, expedita, nihil ea odio itaque dolore iste
            minus impedit enim sit inventore a? Harum alias distinctio, quaerat
            voluptas cum assumenda beatae, hic delectus sit enim recusandae
            porro consequatur non!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game_according_card;
