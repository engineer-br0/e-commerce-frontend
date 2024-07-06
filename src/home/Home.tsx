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
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortFilter, setSortFilter] = useState("");
    // console.log("ser val", searchValue);
    // console.log("price,val", sortFilter);





    //console.log("fil", filteredProducts);

    useEffect(() => {

        setFilteredProducts(products.filter((product) => {

            return (product.title.match(new RegExp(searchValue, 'i'))
                && (params?.category ? params.category === product.category : true)
            )
        }))
        if (sortFilter) {
            const sortedProducts = [...filteredProducts].sort((a, b) => {
                if (sortFilter === "Price Low to High")
                    return a.price - b.price;
                else if (sortFilter === "Price High to Low")
                    return b.price - a.price;
                else if (sortFilter === "Title A to Z") {
                    return a.title[0].charCodeAt(0) - b.title[0].charCodeAt(0);
                }
                else if (sortFilter === "Title Z to A") {
                    return b.title.localeCompare(a.title);
                }
                return 0;
            })
            setFilteredProducts(sortedProducts)
        }

        console.log("after", filteredProducts);

    }, [sortFilter])


    return (
        <Container>
            {loading && <Loading />}
            <div className="sm:p-10 flex flex-col items-center">
                <div className=" sm:hidden flex justify-center p-5">
                    <SearchBar />
                </div>

                {/* <HomeBanner /> */}
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

                {/* PRODUCTS */}
                <div className="flex border mt-10">
                    <div className="bg-red-100 border p-4">
                        <label>Sort By </label>
                        <select value={sortFilter} onChange={(e) => setSortFilter(e.target.value)}>
                            <option value="Price Low to High">Price Low to High</option>
                            <option value="Price High to Low">Price High to Low</option>
                            <option value="Title A to Z">Title A to Z</option>
                            <option value="Title Z to A">Title Z to A</option>
                        </select>
                        <label>Price</label>
                        <select>
                            <option>Min</option>
                            <option>1</option>
                            <option>10</option>
                            <option>100</option>
                            <option>1000</option>
                        </select>
                        <p>to</p>
                        <select>
                            <option>Max</option>
                            <option>1</option>
                            <option>10</option>
                            <option>100</option>
                            <option>1000</option>
                        </select>

                    </div>
                    <div className="products ">

                        {
                            filteredProducts.map((product) => {
                                ////console.log(product);

                                //if (product.title.match(/iphone/i)) {
                                //if (product.title.match(new RegExp(searchValue, 'i')) && (params?.category ? params.category === product.category : true)) {
                                //if (product.title.toLowerCase().includes(searchValue))) {
                                return (
                                    <div key={product.id}>
                                        <Card product={product} />
                                    </div>
                                )
                                //}
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
            </div>
        </Container>
    )
}