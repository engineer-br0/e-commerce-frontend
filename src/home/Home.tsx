import Container from "../Container";
import Card from "./Card";
import "./Home.css"
import { useEffect, useState } from "react";
import { ContextInit } from "../context/Context";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Product from "../products/[ProductId]";
import Carousel from "./Carousel";

export default function Home() {
    const params = useParams();
    const { products } = ContextInit();
    const { searchValue } = ContextInit();

    return (
        <Container>
            <div className="sm:p-10 flex flex-col items-center">
                <div className=" sm:hidden flex justify-center p-5">
                    <SearchBar />
                </div>

                <Carousel />

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
                </div>
            </div>
        </Container>
    )
}