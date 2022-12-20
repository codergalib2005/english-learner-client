import React from "react";
import Header from "../components/shared/Header/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useGetFruitsQuery } from "../redux/feature/fruits/fruitsApi";
import { useRouter } from "next/router";
import BirdCartLoader from "../components/loader/BirdCartLoader";
import Error from "../components/loader/Error";

/* --------------------------------------------------------
-------------Style uses from _bird.scss file---------------
----------------------------------------------------------- */

const Fruits: React.FC = () => {
  const router = useRouter();
  const { limit, page } = router.query;
  const { data, isSuccess, isLoading, isError } = useGetFruitsQuery({
    page: page || 1,
    limit: limit || 20,
  });

  const handlePageClick = (e: any) => {
    if (limit) {
      router.push(`/fruits?page=${e.selected + 1}&limit=${limit}`);
    } else {
      router.push(`/fruits?page=${e.selected + 1}`);
    }
  };
  const changeLimit = (e: any) => {
    if (page) {
      router.push(`/fruits?page=${page}&limit=${e.target.value}`);
    } else {
      router.push(`/fruits?limit=${e.target.value}`);
    }
  };

  let content = null;
  if (isLoading) content = <BirdCartLoader />;
  if (isError) content = <Error massege="404 Page Not Found" />;
  if (isSuccess && data?.birds?.length === 0)
    content = <Error massege="No Data" />;
  if (isSuccess && data?.birds?.length > 0) {
    content = (
      <div className="birds_pages_info">
        {data.birds.map((fruit: any) => (
          <motion.div
            whileDrag={{ scale: 1.1 }}
            whileHover={{ scaleY: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={fruit._id}
            className="birds_card"
          >
            <Image
              className="card_img"
              src={fruit.image}
              alt=""
              width={100}
              height={100}
            />
            <h3>{fruit.name}</h3>
          </motion.div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="birds_pages">
        <div className="birds">
          {content}
          {/* Pagination */}
          <div className="birds_paginations">
            <div className="birds_pagination_counter noselect">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next →"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={data?.totalPages}
                previousLabel="← Previous"
                //   renderOnZeroPageCount={null}
              />
            </div>
            <div className="pagination_result">
              <select
                defaultValue={20}
                disabled={!(isSuccess && data?.birds?.length > 0)}
                onChange={(e) => changeLimit(e)}
                name="birds_count"
                id=""
              >
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
              <p>
                Results: {data?.currentPage}-{limit || 20} of{" "}
                {data?.totalBirds || "00"}
              </p>
            </div>
          </div>
        </div>
        <div className="addsSide">adds Side</div>
      </div>
    </div>
  );
};

export default Fruits;
