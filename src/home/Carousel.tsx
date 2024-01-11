import { useContext, useEffect, useState } from "react";
import { CarouselContext, carouselInterface } from "../context/CarouselContext";

const Carousel = () => {
    const { currentIndex, setCurrentIndex, images } = useContext(CarouselContext) as carouselInterface;

    return (
        <div>
            <div className="relative flex items-center justify-center">

                <img src={images[currentIndex]} className="" />




            </div>


        </div>
    );
}

export default Carousel;