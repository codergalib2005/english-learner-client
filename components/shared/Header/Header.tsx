import Head from "next/head";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </Head>

      <nav className="navbar">
        <a href="#home">Home</a>

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
          </div>
        </div>

        <a href="#">Blog</a>
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
        <a href="#">Contact</a>
        <div className="icon">
          <a onClick={() => setOpen(!open)}>&#9776;</a>
        </div>
      </nav>
    </>
  );
};
export default Header;
