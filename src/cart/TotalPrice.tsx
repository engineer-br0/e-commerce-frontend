import { useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";

const TotalPrice: React.FC<{ MRP: number }> = ({ MRP }) => {
    const { cart } = ContextInit();
    const navigate = useNavigate();

    return (
        <div>
            <div className=" w-96 text-sm p-5 text-sm">
                <div className="flex justify-between">
                    <p className="font-bold">Price details: </p>
                    <p className="font-bold">({cart.length} items)</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >Total MRP:</p>
                    <p > &#8377;{MRP}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Shipping Fee:</p>
                    <p>&#8377;100</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Total Discount(10%): </p>
                    <p className="text-green-600">-&#8377;{MRP / 10}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Platform Fee: </p>
                    <p >&#8377;25</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Platform Fee: </p>
                    <p className="text-green-600">Free</p>
                </div>
                <div className="flex justify-between border-t mt-3">
                    <h2 className="text-lg font-bold ">Total Amount: </h2>
                    <h2 className="text-lg font-bold ">&#8377;{MRP + 100 - MRP / 10 + 25}</h2>
                </div>


            </div>
        </div>
    );
}

export default TotalPrice;