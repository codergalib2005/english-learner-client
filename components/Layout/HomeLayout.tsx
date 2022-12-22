import InformationSide from "../shared/InformationSide";
import AddsSide from "../shared/AddsSide";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import React, { useState } from "react";

type layoutChildren = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: layoutChildren) => {
  console.log(children);
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="home_layout_main_wrapper">
      {/* Keyword Side or Left Side */}
      <div
        className={`${
          show ? "home_layout_keyword_sidebar" : "home_layout_keyword_sidebar_0"
        }`}
      >
        <InformationSide />
      </div>
      {/* Main Content */}
      <div className={`${show ? "content_layout" : "content_layout_0"}`}>
        <Header show={show} setShow={setShow} />
        <div className="content_layout_wrapper">
          {/* Content */}
          <main className="content_box_parent">{children}</main>
          {/* Right Side or Adds Side */}
          <div className="content_box_ads_side">
            <AddsSide />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
