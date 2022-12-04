import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "ki kore aj veve na pai",
      description:
        "It's appointment of the visitors, so, we are hopefully it will return .",
      image: "https://i.ibb.co/swVsTHc/dnload.jpg",
    },
    {
      id: 2,
      title: "ki kore aj veve na pai",
      description:
        "It's appointment of the visitors, so, we are hopefully it will return.",
      image: "https://i.ibb.co/swVsTHc/dnload.jpg",
    },
    {
      id: 3,
      title: "ki kore aj veve na pai",
      description:
        "It's appointment of the visitors, so, we are hopefully it will return.",
      image: "https://i.ibb.co/swVsTHc/dnload.jpg",
    },
  ];
  return (
    <div className="help_component_informationSide">
      <span>Blogs</span>
      {blogs.map((blog) => (
        <div key={blog.id} className="help_component_sub_child_div">
          <div className="help_component_texts">
            <h6>{blog.title}</h6>
            <p>{blog.description}</p>
          </div>
          <div className="help_component_image">
            <img src={blog.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
