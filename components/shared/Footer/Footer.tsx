import { FiFacebook } from "react-icons/fi";
import { GrGooglePlus } from "react-icons/gr";
import { TfiInstagram } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandTwitter } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer_parent_class">
      <div className="footer_parent_content">
        <h2>Let's Connect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          porro.
        </p>
        <div className="custom_search">
          <input
            type="email"
            className="custom_search_input"
            placeholder="Enter your email"
          />
          <button className="custom_search_botton" type="submit">
            Subscribe
          </button>
        </div>
        <div className="footer_bottom">
          <span>Discover 2022 @ All Right Resceved</span>
          <div className="footer_bottom-icon">
            <li>
              <FiFacebook />
            </li>
            <li>
              <GrGooglePlus />
            </li>
            <li>
              <TfiInstagram />
            </li>
            <li>
              <SlSocialLinkedin />
            </li>
            <li>
              <TbBrandTwitter />
            </li>
            <li>
              <AiOutlineYoutube />
            </li>
          </div>
          <span>Designed by ....</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;