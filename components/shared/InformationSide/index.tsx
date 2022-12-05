import Link from "next/link";
import InformationTabs from "./InformationTabs";
import { ImHome } from "react-icons/im";
import React from "react";

import Help from "./Help";
import Blogs from "./Blogs";
import Links from "./Links";

const InformationSide: React.FC = () => {
  return (
    <div className="information_sidebar">
      <Link className="information_link" href="/">
        <button className="information_btn">
          <ImHome />
          <span>Home</span>
        </button>
      </Link>
      <hr />
      <InformationTabs />
      <Blogs />
      <Help />
      <Links />
    </div>
  );
};
export default InformationSide;
