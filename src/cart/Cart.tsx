import { useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Stars from "../utils/Stars";
import { TiDeleteOutline } from "react-icons/ti";
import { useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import TotalPrice from "./TotalPrice";
import Loading from "../utils/Loading";


const Carta = () => {
    const [quant, setQuant] = useState<number>(1);

    //const [MRP, setMRP] = useState<number>(0);
    let MRP: number = 0;
    let totalItems: number = 0;
    const { products, cart, addToCart, removeFromCart } = ContextInit();
    //console.log(products);
    console.log(cart);
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex flex-col items-center gap-1 p-10 bg-gray-100 py-12 sm:py-16 lg:py-20">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                </div>
                {cart.length ?
                    <div className=" sm:w-2/5 bg-white shadow">

                        {
                            cart.map((obj) => {
                                let product = products.find(product => obj.productId == product.id); // matching only value, not data type
                                //setMRP(Number(product?.price))
                                MRP += Number(product?.price) * Number(obj.quantity);
                                totalItems += Number(obj.quantity);
                                return (
                                    product ?
                                        <div className="w-full h-40 relative border flex flex-row justify-around items-center ">
                                            <div onClick={() => navigate(`/products/${obj.productId}`)} className="imageContainer flex items-center">
                                                <img className="image" src={product.thumbnail} width={150} height={150} alt="image" />
                                            </div>
                                            <div>
                                                <div className=" flex flex-col justify-center">
                                                    <h1 className="text-left text-xs font-bold">{product.title?.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
                                                    <p className="text-xs text-left">{product.description?.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                                                    <p className="stars"><Stars rating={product.rating} /></p>


                                                    {/* <button className="bg-red-200" onClick={() => {
                                        if (product) removeFromCart(product.id, 1);
                                        //console.log(cart);
                                    }}>Remove from Cart</button> */}


                                                </div>

                                                <TiDeleteOutline onClick={() => {
                                                    if (product) removeFromCart(product.id, 1);
                                                    //console.log(cart);
                                                }} className="absolute top-0 right-0 text-3xl cursor-pointer" />

                                            </div>

                                            <div className="">
                                                {/* <label>Quantity : </label> */}
                                                <select defaultValue={obj.quantity} onChange={(e) => addToCart(product?.id, Number(e.target.value))} className="pl-1 flex flex  items-center justify-center bg-gray-100 p-1 px-4 text-xs uppercase transition">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                            <p className="flex justify-start font-bold text-xm"> &#8377;{product.price} </p>


                                        </div>
                                        : <div></div>
                                )
                            })
                        }


                        <div className=" border ">
                            <div className="flex justify-center">
                                <TotalPrice MRP={MRP} totalItems={totalItems} />
                            </div>
                            <button onClick={() => navigate("/checkout")} className="w-full w-5/6 m-2 rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">Place Order</button>
                        </div>


                    </div>
                    :
                    <h1 className="py-20">CART IS EMPTY!!</h1>}
            </div>
        </>
    );
}

export default Carta;