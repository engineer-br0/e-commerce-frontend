import { useNavigate, useParams } from "react-router-dom";
import { ContextInit } from "../context/Context";
import TotalPrice from "./TotalPrice";

const Payment = () => {
    const navigate = useNavigate();
    const { cart, products, token, rerender, setRerender } = ContextInit();
    console.log(token);

    const param = useParams();
    console.log("shipping !!!", JSON.parse(param?.shippingDetails || ""));

    let MRP = 0;
    cart.map((obj) => {
        let product = products.find(product => obj.productId == product.id);
        MRP += Number(product?.price) * Number(obj.quantity);
    });

    const addNewProduct = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/orders/addNewOrder", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: param?.shippingDetails
            });
            const res = await response.json();
            if (response.ok) alert("Order placed successfully!");
            console.log(res);
            setRerender(!rerender);
            navigate("/")
        }
        catch (er) {
            console.log(er);
        }
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center">Payment</h1>
                <TotalPrice MRP={MRP} />
                <button onClick={addNewProduct} className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS AND CONTINUE</button>
            </div>

        </div>


    );
}

export default Payment;