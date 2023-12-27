import Container from "../Container";
import HomeBanner from "./HomeBanner";
import Card from "./Card";
import "./Home.css"
import { useEffect, useState } from "react";

export default function Home() {
    const [dummyProducts, setDummyProducts] = useState<{ [key: string]: any }[]>([]);

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
            <HomeBanner />
            <div className="products">
                {
                    dummyProducts.map((product) => {

                        return (
                            <div key={product.id}>
                                <Card product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}