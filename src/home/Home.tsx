import Container from "../Container";
import Card from "./Card";
import "./Home.css"
import { useContext, useEffect, useState } from "react";
import { ContextInit } from "../context/Context";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Product from "../products/[ProductId]";
import Carousel from "./Carousel";
import Loading from "../utils/Loading";
import { CarouselContext, carouselInterface } from "../context/CarouselContext";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function Home() {
    const params = useParams();
    const { products, loading } = ContextInit();
    const { searchValue } = ContextInit();
    const { images, currentIndex, setCurrentIndex } = useContext(CarouselContext) as carouselInterface;

    return (
        <Container>
            {loading && <Loading />}
            <div className="sm:p-10 flex flex-col items-center">
                <div className=" sm:hidden flex justify-center p-5">
                    <SearchBar />
                </div>

                <div className="relative flex justify-center items-center">
                    <Carousel />
                    <div className="absolute bottom-0 flex items-center">
                        {images.map((image, index) => {
                            return (
                                <>
                                    <p onClick={() => setCurrentIndex(index)} className=" text-9xl text-gray-700 hover:text-gray-300">
                                        .
                                    </p>
                                </>
                            )
                        })}
                    </div>

                    <IoIosArrowDropleft onClick={() => setCurrentIndex(currentIndex === 0 ? (images.length - 1) : (currentIndex - 1))} className="absolute left-0 bg-white text-5xl" />
                    <IoIosArrowDropright onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} className="absolute right-0 bg-white text-5xl" />
                </div>

                {/* <HomeBanner /> */}
                <div className="products border">
                    {
                        products.map((product) => {
                            ////console.log(product);

                            //if (product.title.match(/iphone/i)) {
                            if (product.title.match(new RegExp(searchValue, 'i')) && (params?.category ? params.category === product.category : true)) {
                                //if (product.title.toLowerCase().includes(searchValue))) {
                                return (
                                    <div key={product.id}>
                                        <Card product={product} />
                                    </div>
                                )
                            }
                        })
                    }

                    {/* Blank cards  */}
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>
                    <div className="card sm:m-3 overflow-hidden bg-white ">
                    </div>

                </div>
            </div>
        </Container>
    )
}