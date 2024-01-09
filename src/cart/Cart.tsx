import { useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Stars from "../utils/Stars";
import { TiDeleteOutline } from "react-icons/ti";
import { useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import TotalPrice from "./TotalPrice";


const Carta = () => {
    const [quant, setQuant] = useState<number>(1);
    //const [MRP, setMRP] = useState<number>(0);
    let MRP: number = 0;
    let totalItems: number = 0;
    const { products, cart, addToCart, removeFromCart } = ContextInit();
    //console.log(products);
    //console.log(cart);
    const navigate = useNavigate();

    return (
        <div>
            {cart.length ?
                <div className="min-h-screen flex flex-col items-center gap-1 p-10">
                    {
                        cart.map((obj) => {
                            let product = products.find(product => obj.productId == product.id); // matching only value, not data type
                            //setMRP(Number(product?.price))
                            MRP += Number(product?.price) * Number(obj.quantity);
                            totalItems += Number(obj.quantity);
                            return (
                                product ?
                                    <div className="h-40 relative border w-96 flex flex-row justify-around items-center">
                                        <div onClick={() => navigate(`/products/${obj.productId}`)} className="imageContainer flex items-center">
                                            <img className="image" src={product.thumbnail} width={150} height={150} alt="image" />
                                        </div>
                                        <div>
                                            <div className=" flex flex-col justify-center">
                                                <h1 className="text-left text-xs font-bold">{product.title?.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
                                                <p className="text-xs text-left">{product.description?.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                                                <p className="stars"><Stars rating={product.rating} /></p>
                                                <p className="flex justify-start font-bold text-xm"> &#8377;{product.price} </p>

                                                {/* <button className="bg-red-200" onClick={() => {
                                        if (product) removeFromCart(product.id, 1);
                                        //console.log(cart);
                                    }}>Remove from Cart</button> */}
                                                <div className="flex">
                                                    <label>Quantity : </label>
                                                    <select defaultValue={obj.quantity} onChange={(e) => addToCart(product?.id, Number(e.target.value))} className="pl-1">
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
                                            </div>
                                            <TiDeleteOutline onClick={() => {
                                                if (product) removeFromCart(product.id, 1);
                                                //console.log(cart);
                                            }} className="absolute top-0 right-0 text-3xl cursor-pointer" />

                                        </div>



                                    </div>
                                    : <div></div>
                            )
                        })
                    }


                    <div className="border border-red-500">
                        <TotalPrice MRP={MRP} totalItems={totalItems} />
                        <button onClick={() => navigate("/checkout")} className="bg-green-500 w-96 mt-2">Place Order</button>
                    </div>


                </div>
                :
                <h1 className="py-20">CART IS EMPTY!!</h1>}
        </div>);
}

export default Carta;