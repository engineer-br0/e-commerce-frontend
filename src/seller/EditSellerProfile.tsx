import { useContext, useState } from "react";
import { ContextItems, SellerContext } from "../context/SellerContext";

const EditSellerProfile = () => {
    const { sellerDetails, setSellerDetails } = useContext(SellerContext) as ContextItems;

    const [name, setName] = useState<string>(sellerDetails.name || "");
    const [gstNumber, setGstNumber] = useState<string>(sellerDetails.gstNumber || "");
    const [mobile, setMobile] = useState<string>(sellerDetails.mobile || "");
    const [address, setAddress] = useState<string>(sellerDetails.address || "");

    const updateUser = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/seller/details/updateSellerDetails", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${sellerDetails.sellerToken}`
                },
                body: JSON.stringify({ userData: { name, gstNumber, mobile, address } })
            });
            const res = await response.json();
            console.log(res);
        }
        catch (er) {
            console.log(er);
        }
    }

    return (
        <div className="flex justify-center gap-5 flex-wrap p-10">
            <div className='flex flex-col items-center '>
                <div className="flex flex-col gap-5 border w-96 text-xs p-5 text-left font-bold box-border">
                    <div className="flex justify-between">
                        <h1>Name</h1>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                    </div>
                    <div className="flex justify-between">
                        <h1>GST Number</h1>
                        <input value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} placeholder='GST Number' className='border w-3/4 h-10 p-2' required />
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
                <button onClick={updateUser} className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS</button>

            </div>
        </div>
    );
}

export default EditSellerProfile;