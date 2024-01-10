import Stars from "../utils/Stars"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ContextInit } from "../context/Context"

const ProductCard: React.FC<{
    product: {
        [key: string]: any,
    }
}> = ({ product }) => {
    const navigate = useNavigate();
    const { cart, addToCart, removeFromCart, isLogin } = ContextInit();

    return (
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
            <button className="flex w-full items-center justify-center rounded-md bg-slate-900 px-2 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 ">Delete Product</button>
        </div>
    );
}

export default ProductCard; 