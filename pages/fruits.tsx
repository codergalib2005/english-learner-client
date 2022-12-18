import React from 'react';
import Header from '../components/shared/Header/Header';
import { fruits } from '../fakeData/fruits';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Fruits: React.FC = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="birds_pages">
                    <div className="birds">
                        <div className="birds_pages_info">
                            {fruits.map((fruit) => (
                                <motion.div
                                    whileDrag={{ scale: 1.1 }}
                                    whileHover={{ scaleY: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    key={fruit.id} className="fruits_card">
                                    <Image
                                        className="card_img"
                                        src={fruit.img}
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                    <h3 className='fruits_card_text'>{fruit.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                        <div className="birds_paginations">
                            <div className="birds_pagination_counter">
                                <span>
                                    <IoIosArrowBack />
                                </span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <h5>.....</h5>
                                <span>110</span>
                                <span>
                                    <IoIosArrowForward />
                                </span>
                            </div>
                            <div className="pagination_result">
                                <select name="birds_count" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <p>Results: 1-5 of 324</p>
                            </div>
                        </div>
                    </div>
                    <div className="addsSide">adds Side</div>
                </div>
            </div>
        </div>
    );
};

export default Fruits;