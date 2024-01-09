import React, { useState } from 'react';
import { ContextInit } from '../context/Context';
import TotalPrice from './TotalPrice';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC<any> = ({ props }) => {
    const navigate = useNavigate()
    const { cart, products, user, setUser, token, rerender, setRerender } = ContextInit();
    //console.log(user);

    const [name, setName] = useState<string>(user.name);
    const [mobile, setMobile] = useState<string>(user.mobile);
    const [address, setAddress] = useState<string>(user.address);


    const saveDetails = async (e: any) => {
        e.preventDefault();
        try {
            // const response = await fetch("http://localhost:4000/orders/addNewOrder", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Authorization": `Bearer ${token}`
            //     },
            //     body: JSON.stringify({ name, mobile, address })
            // });
            // const res = await response.json();
            // //console.log(res);
            // setRerender(!rerender);
            navigate(`/payment/${JSON.stringify({ name, mobile, address })}`);
        }
        catch (er) {
            //console.log(er);
        }
    }

    return (
        <div className="flex justify-center gap-5 flex-wrap p-10">
            <form onSubmit={saveDetails} className='flex flex-col items-center '>
                <div className="flex flex-col gap-5 border w-96 text-xs p-5 text-left font-bold box-border">
                    <h1>Shipping Details</h1>
                    <div className="flex justify-between">
                        <h1>Name</h1>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                    </div>

                    <div className="flex justify-between">
                        <h1>Mobile No.</h1>
                        <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile No*' className='border w-3/4  h-10 p-2' required />
                    </div>

                    <div className="flex justify-between">
                        <h1>Adress</h1>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='border w-3/4  h-10 p-2' required />
                    </div>
                </div>
                <button type='submit' className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS AND CONTINUE</button>

            </form>

        </div>
    );
}

export default Checkout;