import React, { useState } from "react";
import Explore_cards from "../../components/explore/Explore_cards";
import Header from "../../components/shared/Header/Header";

const index = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />

      <Explore_cards />
    </div>
  );
};

export default index;
