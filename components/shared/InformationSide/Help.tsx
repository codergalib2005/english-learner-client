import Link from "next/link";
import React from "react";
import { GoCheck } from "react-icons/go";

const Help = () => {
  const routes = [
    {
      id: 1,
      route: "online-english-level-test",
      title: "Free online English test",
    },
    {
      id: 2,
      route: "news-letter",
      title: "Sign up for our newsletter",
    },
    {
      id: 3,
      route: "frequently-asked-questions",
      title: "Frequently asked questions",
    },
    {
      id: 4,
      route: "getting-started",
      title: "Getting started",
    },
    {
      id: 5,
      route: "house-rules",
      title: "House rules",
    },
  ];
  return (
    <div className="help_component_information_side">
      <div className="help_component_child">
        {routes.map((x_route) => (
          <div className="help_link">
            <GoCheck />
            <Link href={`/${x_route.route}`}>
              {" "}
              <p>{x_route.title}</p>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
