import InformationSide from "../shared/InformationSide";
import AddsSide from "../shared/AddsSide";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import React, { useState } from "react";

type layoutChildren = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: layoutChildren) => {
  const [show, setShow] = useState<boolean>(false);

  const [showRight, setShowRight] = useState<boolean>(false);
  return (
    <div className="home_layout_main_wrapper">
      {/* Keyword Side or Left Side */}
      <div
        className={`${
          show
            ? "home_layout_keyword_sidebar"
            : "home_layout_keyword_sidebar_0 show_for_md"
        }`}
      >
        <InformationSide setShow={setShow} show={show} />
      </div>
      {/* Main Content */}
      <div
        className={`${show ? "content_layout background" : "content_layout_0"}`}
      >
        <Header show={show} setShow={setShow} />
        <div className="content_layout_wrapper">
          {/* Content */}
          <main
            className={`${
              show ? "content_box_parent" : "content_box_parent_0"
            }`}
          >
            {children}
          </main>
          {/* Right Side or Adds Side */}
          <div className="content_box_ads_side">
            <AddsSide setShowRight={setShowRight} showRight={showRight} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
