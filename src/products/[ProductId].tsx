import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Product = () => {
    const param = useParams();
    console.log(param.productId);


    const [dummyProducts, setDummyProducts] = useState<{ [key: string]: any }[]>([]);
    const [producta, setProduct] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const res = await response.json();
                //console.log(res.products);
                setDummyProducts(res.products);
                //console.log(dummyProducts);

                //dummyProducts.map((obj) => { if (obj.id === productId) return obj; });
            }
            catch (er) {
                console.log(er);
            }
        }

        fetchProducts();
    }, [])

    const product = dummyProducts.find((obj) => Number(obj.id) === Number(param.ProductId));
    console.log(product);

    return (
        <div>
            {product && product.title}
        </div>
    );
}

export default Product;