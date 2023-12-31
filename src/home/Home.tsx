import Container from "../Container";
import HomeBanner from "./HomeBanner";
import Card from "./Card";
import "./Home.css"
import { useEffect, useState } from "react";
import { ContextInit } from "../context/Context";

export default function Home() {
    const [dummyProducts, setDummyProducts] = useState<{ [key: string]: any }[]>([]);
    const { searchValue } = ContextInit();
    const h = "iphone";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const res = await response.json();
                console.log(res);
                setDummyProducts(res.products);
                console.log(dummyProducts);

            }
            catch (er) {
                console.log(er);
            }
        }

        fetchProducts();
    }, [])

    return (
        <Container>
            <div className="p-10">
                <HomeBanner />
                <div className="products">
                    {
                        dummyProducts.map((product) => {
                            //if (product.title.match(/iphone/i)) {
                            if (product.title.match(new RegExp(searchValue, 'i'))) {
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