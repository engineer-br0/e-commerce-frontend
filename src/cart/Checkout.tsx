import React from 'react';
import { ContextInit } from '../context/Context';
import TotalPrice from './TotalPrice';

const Checkout: React.FC<any> = ({ props }) => {
    const { cart, products } = ContextInit();
    let MRP = 0;
    cart.map((obj) => {
        let product = products.find(product => obj.productId == product.id);
        MRP += Number(product?.price) * Number(obj.quantity);
    });

    return (
        <div className="">
            <div className='flex flex-col items-center'>
                <h1>Checkout</h1>
                <TotalPrice MRP={MRP} />
            </div>
        </div>
    );
}

export default Checkout;