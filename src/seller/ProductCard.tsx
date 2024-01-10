import Stars from "../utils/Stars"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ContextInit } from "../context/Context"
import { ContextItems, SellerContext } from "../context/SellerContext"
import Loading from "../utils/Loading"

const ProductCard: React.FC<{
    product: {
        [key: string]: any,
    }
}> = ({ product }) => {
    const navigate = useNavigate();
    const { sellerDetails, sellerRerender, setSellerRerender } = useContext(SellerContext) as ContextItems;
    const [loading, setLoading] = useState<boolean>(false);

    const deleteProduct = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:4000/seller/details/deleteProduct", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sellerDetails.sellerToken}`
                },
                body: JSON.stringify({ id: product.id })
            });
            const res = await response.json();
            setLoading(false);
            setSellerRerender(!sellerRerender);
            alert(res.message);
        }
        catch (er) {
            setLoading(false);
            console.log("error occured", er);
        }
    }

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
                <button onClick={deleteProduct} className="flex w-full items-center justify-center rounded-md bg-slate-900 px-2 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 ">Delete Product</button>
            </div>
        </>
    );
}

export default ProductCard; 