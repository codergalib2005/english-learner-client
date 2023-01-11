import React from "react";
import Link from "next/link";
import InformationTabs from "./InformationTabs";
import { ImHome } from "react-icons/im";

import Help from "./Help";
import Blogs from "./Blogs";
import Links from "./Links";

type information = {
  setShow: any;
  show: boolean;
};

const InformationSide: React.FC<information> = (props: information) => {
  const { setShow, show } = props;
  return (
    <div className="information_sidebar">
      <div className="head_sidebar">
        <Link className="information_link" href="/">
          <button className="information_btn">
            <ImHome />
            <span>Home</span>
          </button>
        </Link>
        <button onClick={() => setShow(false)} className="close_menu">
          &#215;
        </button>
      </div>
      <hr />
      <InformationTabs />
      <Blogs />
      <Help />
      <Links />
    </div>
  );
};
export default InformationSide;
