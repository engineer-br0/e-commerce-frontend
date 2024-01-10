import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Stars from "../utils/Stars";
import { Context, ContextInit } from "../context/Context";
import Loading from "../utils/Loading";

const Product = () => {
    const param = useParams();
    //console.log(param);
    const [product, setProduct] = useState<{ [key: string]: any }>({});
    const { products, cart, addToCart, loading } = ContextInit();

    useEffect(() => {

        const foundProduct = products.find((obj) => (obj.id) == (param.ProductId));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [products, param.ProductId]);


    return (
        <>
            {loading && <Loading />}
            <div className="min-h-screen flex justify-center p-10 ">
                {product ?
                    <div key={product.rating + Math.random} className=" p-5 relative border w-4/5 flex flex-row justify-around items-center">
                        <div className="w-1/2 flex flex-wrap gap-5 items-center">
                            {product?.images?.map((image: string) => {
                                return (
                                    <img className="image" src={image} width={250} height={250} alt="image" />
                                );
                            })}

                        </div>
                        <div className=" flex flex-col gap-1 justify-center">
                            <h1 className="text-left text-2xl font-bold">{product.title}</h1>
                            <p className="text-sm text-left">{product.description}</p>
                            <p className="stars"><Stars rating={product.rating} /></p>
                            <p className="flex justify-start font-bold text-xl"> &#8377;{product.price} </p>
                            <button className="bg-red-400" onClick={() => {
                                addToCart(product.id, 1);
                                //console.log(cart);
                            }}>Add to Cart</button>
                        </div>
                    </div>
                    : <div></div>
                }
            </div>
        </>
    );
}

export default Product;