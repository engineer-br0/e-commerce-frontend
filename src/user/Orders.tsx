import { useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Stars from "../utils/Stars";

const Orders = () => {
    const navigate = useNavigate()
    const { orders, products } = ContextInit();
    //console.log(orders);

    return (
        <>
            <div className="p-10 flex flex-col gap-2">
                <h1 className="font-bold">MY ORDERS </h1>
                {orders.map((order, index) => {
                    return (
                        <>
                            <div className="border flex flex-wrap gap-5">
                                <div>
                                    {order.products.map((prod, index2) => {
                                        const product = products.find(product => product.id == prod.productId);
                                        return (
                                            <div className="overflow-hidden h-40 relative border w-96 flex flex-row justify-around items-center">
                                                <div onClick={() => navigate(`/products/${prod.productId}`)} className="imageContainer flex items-center">
                                                    <img className="image " src={product?.thumbnail} width={150} height={150} alt="image" />
                                                </div>
                                                <div>
                                                    <div className=" flex flex-col justify-center">
                                                        <h1 className="text-left text-xs font-bold">{product?.title?.length > 20 ? product?.title.slice(0, 20) + "..." : product?.title}</h1>
                                                        <p className="text-xs text-left">{product?.description?.length > 20 ? product?.description.slice(0, 20) + "..." : product?.description}</p>
                                                        <p className="stars"><Stars rating={product?.rating} /></p>
                                                        <p className="flex justify-start font-bold text-xm"> &#8377;{product?.price} </p>

                                                        {/* <button className="bg-red-200" onClick={() => {
                                        if (product) removeFromCart(product.id, 1);
                                        //console.log(cart);
                                    }}>Remove from Cart</button> */}
                                                        <div className="flex">
                                                            <p>Quantity: {prod.quantity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>


                                <div className=" w-96 text-sm p-5 text-sm">
                                    <h1 className="font-bold">Shipping details:</h1>
                                    <div className="flex flex-col items-start">
                                        <p>Name: {order.shippingDetails.name}</p>
                                        <p>Mobile: {order.shippingDetails.mobile}</p>
                                        <p>Address: {order.shippingDetails.address}</p>
                                    </div>
                                    <h1 className="font-bold pt-3">INVOICE</h1>
                                    <div className="flex justify-between">
                                        <p className="font-bold">Price details: </p>
                                        <p className="font-bold">({order.bill.totalItems} items)</p>
                                    </div>
                                    <div className="flex justify-between font-light">
                                        <p >Total MRP:</p>
                                        <p > &#8377;{order.bill.MRP}</p>
                                    </div>
                                    <div className="flex justify-between font-light">
                                        <p>Shipping Fee:</p>
                                        <p>&#8377;{order.bill.shippingCharge}</p>
                                    </div>
                                    <div className="flex justify-between font-light">
                                        <p>Total Discount(10%): </p>
                                        <p className="">&#8377;{order.bill.discount}</p>
                                    </div>
                                    <div className="flex justify-between font-light">
                                        <p>Platform Fee: </p>
                                        <p >&#8377;{order.bill.platformCharge}</p>
                                    </div>
                                    <div className="flex justify-between border-t mt-3">
                                        <h2 className="text-lg font-bold ">Total Amount: </h2>
                                        <h2 className="text-lg font-bold ">&#8377;{order.bill.MRP - order.bill.discount + order.bill.platformCharge + order.bill.shippingCharge}</h2>
                                    </div>


                                </div>
                            </div>

                        </>
                    )

                })}
            </div>
        </>
    );
}

export default Orders;