import { useContext, useEffect, useState } from "react";
import { CarouselContext } from "../context/CarouselContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = () => {
    const { currentIndex, images } = useContext(CarouselContext);

    return (
        <div className=" ">

            <img src={images[currentIndex]} className="" />


            {/* <button onClick={changeIndex}> Change</button> */}
        </div>
    );
}

export default Carousel;