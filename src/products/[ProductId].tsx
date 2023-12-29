import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Stars from "../utils/Stars";
import { Context, ContextInit } from "../context/Context";

const Product = () => {
    const param = useParams();
    console.log(param);
    const [product, setProduct] = useState<{ [key: string]: any }>({});
    const { products, cart, addToCart } = ContextInit();

    useEffect(() => {
        const foundProduct = products.find((obj) => Number(obj.id) === Number(param.ProductId));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [products, param.ProductId]);

    console.log(cart);

    return (
        product ?
            <div>
                <div className="imageContainer">
                    <img className="image" src={product.thumbnail} width={150} height={150} alt="image" />
                </div>

                <h1 className="text-left text-xs font-bold">{product.title?.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
                <p className="text-xs text-left">{product.description?.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                <p className="stars"><Stars rating={product.rating} /></p>
                <p className="flex justify-start font-bold text-xm"> &#8377;{product.price} </p>
                <button className="bg-blue-200" onClick={() => {
                    addToCart(product.id);
                    console.log(cart);
                }}>Add to Cart</button>
            </div>
            : <div></div>
    );
}

export default Product;