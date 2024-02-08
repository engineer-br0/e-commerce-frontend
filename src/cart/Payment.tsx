import { useNavigate, useParams } from "react-router-dom";
import { ContextInit } from "../context/Context";
import TotalPrice from "./TotalPrice";

const Payment = () => {
    const navigate = useNavigate();
    const { user, cart, products, token, rerender, setRerender } = ContextInit();
    //console.log(token);

    const param = useParams();
    const shippingDetails = JSON.parse(param?.shippingDetails || "");
    ////console.log("shipping !!!", JSON.parse(param?.shippingDetails || ""));

    let MRP = 0;
    let totalItems = 0;
    cart.map((obj) => {
        let product = products.find(product => obj.productId == product.id);
        MRP += Number(product?.price) * Number(obj.quantity);
        totalItems += Number(obj.quantity);
    });

    const addNewProduct = async () => {
        //e.preventDefault();
        try {
            //const response = await fetch("http://localhost:4000/orders/addNewOrder", {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/orders/addNewOrder", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    totalItems,
                    MRP,
                    shippingCharge: 100,
                    discount: MRP / 10,
                    platformCharge: 0,
                    shippingDetails
                })
            });
            const res = await response.json();
            if (response.ok) {
                alert("Order placed successfully!");
            }
            //console.log(res);
            setRerender(!rerender);
            //console.log(cart);
            //console.log(user);

            navigate("/")
        }
        catch (er) {
            //console.log(er);
        }
    }

    // const loadScript = (src: any) => {
    //     return new Promise((resovle) => {
    //         const script = document.createElement('script');
    //         script.src = src;
    //         script.onload = () => {
    //             resovle(true)
    //         }
    //         script.onerror = () => {
    //             resovle(false)
    //         }
    //         document.body.appendChild(script)
    //     });
    // }
    const razorPay = async () => {
        const amount = 5000;
        const order = await fetch("http://localhost:4000/payment/createOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount })
        });
        const orderRes = await order.json();
        console.log(orderRes);


        const options = {
            amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            key: "rzp_test_9WveOYwfSoAOYe", // Enter the Key ID generated from the Dashboard
            currency: "INR",
            name: "MRIDUL BHAI KA AMAZON", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: orderRes.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/payment/paymentVerification",
            prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                name: "Gaurav Kumar", //your customer's name
                email: "gaurav.kumar@example.com",
                contact: "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            address: "Razorpay Corporate Office",
            notes: {
            },
            color: "#3399cc",
            theme: {
            }
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
    }


    return (

        <div>
            {totalItems ?
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center">Payment</h1>
                    <TotalPrice MRP={MRP} totalItems={totalItems} />
                    <button onClick={razorPay} className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS AND CONTINUE</button>
                </div>
                : ""
            }
        </div>


    );
}

export default Payment;