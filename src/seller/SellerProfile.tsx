import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SellerProfile = () => {

    return (
        <div className="flex flex-col items-center">
            <div className=" w-96 text-sm p-5 text-sm">
                <h1>PROFILE DETAILS</h1>
                <div className="flex justify-between">
                    <p className="font-bold">Full Name: </p>
                    <p className="font-bold">{"Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >Email ID:</p>
                    <p > {"Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Gender: </p>
                    <p className="text-green-600">{"Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Mobile No:</p>
                    <p>{"Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Address:</p>
                    <p>{"Not provided"}</p>
                </div>
                <button className="bg-green-500 w-96 mt-2">Edit Details</button>
                <button className="bg-green-500 w-96 mt-2">Logout</button>


            </div>
        </div>
    );
}

export default SellerProfile;