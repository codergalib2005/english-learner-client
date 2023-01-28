import React, { useState } from "react";
import Explore from "../../components/explore/Explore";
import Header from "../../components/shared/Header/Header";

const index = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />

      <Explore />
    </div>
  );
};

export default index;
