
//import Image from "next/image";
import "./Card.css"
import Stars from "../utils/Stars"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Card: React.FC<{
    product: {
        [key: string]: any,
    }
}> = ({ product }) => {
    const [son, setSon] = useState("yash")
    console.log(product);
    const navigate = useNavigate();
    //const router = useRouter();

    return (

        <div className="card" onClick={(e) => {
            navigate(`/products/${product.id}`, { state: { name: "mridul", age: 30, son: son, product } })
        }}>

            <div className="imageContainer">
                <img className="image" src={product.thumbnail} width={150} height={150} alt="image" />
            </div>

            <h1 className="text-left text-xs font-bold">{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
            <p className="text-xs text-left">{product.description.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
            <p className="stars"><Stars rating={product.rating} /></p>
            <p className="flex justify-start font-bold text-xm"> &#8377;{product.price} </p>
        </div>
    );
}

export default Card; 