import Link from "next/link";
import React from "react";
import { GoCheck } from "react-icons/go";

const Help = () => {
  const routes = [
    {
      id: 1,
      url: "https://www.google.com",
      title: "Free online English test",
    },
    {
      id: 2,
      url: "https://www.google.com",
      title: "Sign up for our newsletter",
    },
    {
      id: 3,
      url: "https://www.google.com",
      title: "Frequently asked questions",
    },
    {
      id: 4,
      url: "https://www.google.com",
      title: "Getting started",
    },
    {
      id: 5,
      url: "https://www.google.com",
      title: "House rules",
    },
  ];
  return (
    <div className="help_component_information_side">
      <div className="help_component_child">
        <p className="help_title">Helps</p>
        {routes.map((x_route, index) => (
          <div className="help_link_div" key={index}>
            <GoCheck />
            <a target="_blank" className="help_link" href={x_route.url}>
              {" "}
              <p>{x_route.title}</p>{" "}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
