import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

type headerType = {
  show: boolean;
  setShow: any;
};
const Header: React.FC<headerType> = (props: headerType) => {
  const { show, setShow } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </Head>

      <div className="header">
        <div className="header_content">
          <div>
            <div onClick={() => setShow(true)} className="menu_icon">
              <a>&#9776;</a>
            </div>

            <h3 className="logo_title_main">Learn Speak</h3>
          </div>
          {/* <div
            className={open ? "nav_links_mobile" : "nav_links"}
            onClick={() => setOpen(!open)}
          >
            <a>Home</a>
            <a>about</a>
            <a>Services</a>
            <a>Skills</a>
            <a>contact</a>
          </div> */}
          <nav className={open ? "nav_links_mobile" : "nav_links"}>
            <Link className="link" href="/">
              Home
            </Link>

            <div className="dropdown">
              <button className="dropbtn">
                Services
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">British English</a>
                <a href="#">American English</a>
                <a href="#">Talk your Friends</a>
                <a href="#">Find Partner</a>
                <Link href="/birds">Birds</Link>
                <Link href="/animals">Animals</Link>
                <Link href="/fruits">Fruits</Link>
              </div>
            </div>
            <a className="link" href="#">
              Blog
            </a>
            <div className="dropdown">
              <button className="dropbtn">
                About
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Our Company</a>
                <a href="#">Our Team</a>
                <a href="#">Community</a>
                <a href="#">FAQs</a>
              </div>
            </div>
            <a className="link" href="#">
              Contact
            </a>
            {open && (
              <h3 className="profile_mobile">
                <CgProfile />
              </h3>
            )}
          </nav>
          <h3 className="profile">
            <CgProfile />
          </h3>
          <h3 className="logo_title">Learn Skill</h3>

          <div className="icon">
            <a onClick={() => setOpen(!open)}>&#9776; </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
