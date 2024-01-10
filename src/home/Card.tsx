
//import Image from "next/image";
import "./Card.css"
import Stars from "../utils/Stars"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ContextInit } from "../context/Context"
import Loading from "../utils/Loading"

const Card: React.FC<{
    product: {
        [key: string]: any,
    }
}> = ({ product }) => {
    const navigate = useNavigate();
    const { cart, addToCart, removeFromCart, isLogin, loading } = ContextInit();
    const [checkItemInCart, setCheck] = useState<boolean>(false);

    useEffect(() => {
        //console.log("checking cards", cart);
        if (!cart.length) setCheck(false);
        else {
            if (cart.find(item => item?.productId == product.id)) setCheck(true);
            else setCheck(false)
            //console.log(checkItemInCart);
        }

    }, [cart, isLogin])


    return (
        <>
            {loading && <Loading />}
            <div className="card sm:m-3 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
                <div onClick={(e) => {
                    navigate(`/products/${product.id}`) // not working , { state: { name: "mridul", age: 30, son: son, product } }
                }}>

                    <div className="imageContainer">
                        <img className="image" src={product.thumbnail} alt="image" />
                    </div>

                    <h1 className="text-left text-xs font-bold">{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
                    <p className="text-xs text-left">{product.description.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                    <p className="stars"><Stars rating={product.rating} /></p>

                    <p className="flex justify-between">
                        <span>
                            <span className="text-xl font-bold text-slate-900">&#8377;{product.price} </span>
                            <span className="text-sm text-slate-900 line-through">&#8377;{product.price + product.price * 0.2}</span>
                        </span>

                    </p>

                </div>
                {
                    checkItemInCart ?
                        <button onClick={() => { removeFromCart(product.id, 1) }} className="flex w-full items-center justify-center rounded-md bg-slate-900 px-2 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 ">Remove from cart</button>
                        :
                        <button onClick={() => { addToCart(product.id, 1) }} className="flex w-full items-center justify-center rounded-md bg-slate-900 px-2 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 ">Add to cart</button>
                }
            </div>
        </>
    );
}

export default Card; 