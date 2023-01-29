import React from "react";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";
import Book_read from "./../../components/courses/Book_read";

const Beginner: React.FC = () => {
  return (
    <div>
      <Header />
      <Book_read />
      <Footer />
    </div>
  );
};

export default Beginner;
