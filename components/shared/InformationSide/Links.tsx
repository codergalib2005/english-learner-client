import React from "react";

const Links = () => {
  const linkData = [
    {
      id: 1,
      title: "about",
      link: "https://www.google.com",
    },
    {
      id: 2,
      title: "newsletter",
      link: "https://www.google.com",
    },
    {
      id: 3,
      title: "home",
      link: "https://www.google.com",
    },
    {
      id: 4,
      title: "contact",
      link: "https://www.google.com",
    },
    {
      id: 5,
      title: "advertise",
      link: "https://www.google.com",
    },
    {
      id: 6,
      title: "help",
      link: "https://www.google.com",
    },
    {
      id: 7,
      title: "terms",
      link: "https://www.google.com",
    },
    {
      id: 8,
      title: "privacy",
      link: "https://www.google.com",
    },
    {
      id: 9,
      title: "community",
      link: "https://www.google.com",
    },
    {
      id: 10,
      title: "career",
      link: "https://www.google.com",
    },
    {
      id: 11,
      title: "life",
      link: "https://www.google.com",
    },
    {
      id: 12,
      title: "condition",
      link: "https://www.google.com",
    },
    {
      id: 13,
      title: "team",
      link: "https://www.google.com",
    },
    {
      id: 14,
      title: "CEO",
      link: "https://www.google.com",
    },
    {
      id: 15,
      title: "location",
      link: "https://www.google.com",
    },
  ];
  return (
    <div className="links_component_information_side">
      {linkData.map((data) => (
        <a key={data.id} target="_blank" href={data.link}>
          {data.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
