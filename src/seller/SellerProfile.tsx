import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContextItems, SellerContext } from "../context/SellerContext";

const SellerProfile = () => {
    const navigate = useNavigate();
    const { sellerDetails } = useContext(SellerContext) as ContextItems;
    console.log(sellerDetails);

    const handleLogout = () => {
        document.cookie = "sellerToken=x; expires=1 Jan 1970 0:0:0;";
        console.log(document.cookie);
        alert("Seller logged out successfully!")
        navigate("/seller/login");
    }

    return (
        <div className="flex flex-col items-center">
            <div className=" w-96 text-sm p-5 text-sm">
                <h1>PROFILE DETAILS</h1>
                <div className="flex justify-between">
                    <p className="font-bold">Full Name: </p>
                    <p className="font-bold">{sellerDetails.name || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >Email ID:</p>
                    <p > {sellerDetails.email || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >GST Number:</p>
                    <p > {sellerDetails.gstNumber || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >Mobile:</p>
                    <p > {sellerDetails.mobile || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Address:</p>
                    <p>{sellerDetails.address || "Not provided"}</p>
                </div>
                <button onClick={() => navigate("/seller/editSellerProfile")} className="bg-green-500 w-96 mt-2">Edit Details</button>
                <button onClick={handleLogout} className="bg-green-500 w-96 mt-2">Logout</button>
                <button onClick={() => navigate("/seller/addProduct")} className="bg-green-500 w-96 mt-2">Add products</button>


            </div>
        </div>
    );
}

export default SellerProfile;