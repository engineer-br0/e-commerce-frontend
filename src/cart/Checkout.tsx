import React from 'react';
import { ContextInit } from '../context/Context';
import TotalPrice from './TotalPrice';

const Checkout: React.FC<any> = ({ props }) => {
    const { cart, products, user, setUser } = ContextInit();
    let MRP = 0;
    cart.map((obj) => {
        let product = products.find(product => obj.productId == product.id);
        MRP += Number(product?.price) * Number(obj.quantity);
    });

    return (
        <div className="flex justify-center gap-5 flex-wrap p-10">
            <div className='flex flex-col items-center '>
                <div className="flex flex-col gap-5 border w-96 text-xs p-5 text-left font-bold box-border">
                    <h1>CONTACT DETAILS</h1>
                    <input value={user.name} placeholder='Name*' className='border h-10 p-2' required />
                    <input placeholder='Mobile No*' className='border h-10 p-2' required />

                    <h1>ADDRESS DETAILS</h1>
                    <input placeholder='Address' className='border h-10 p-2' required />


                </div>
                <button className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS</button>

            </div>
            <TotalPrice MRP={MRP} />
        </div>
    );
}

export default Checkout;