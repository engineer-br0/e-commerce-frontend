import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContextItems, SellerContext } from "../context/SellerContext";
import Card from "../home/Card";
import { FaRegUser } from "react-icons/fa";

const SellerProfile = () => {
    const navigate = useNavigate();
    const { sellerDetails } = useContext(SellerContext) as ContextItems;
    //console.log(sellerDetails);

    const handleLogout = () => {
        document.cookie = "sellerToken=x; expires=1 Jan 1970 0:0:0;";
        //console.log(document.cookie);
        alert("Seller logged out successfully!")
        navigate("/seller/login");
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="CARD w-96 flex flex-col items-center rounded-lg border bg-white p-4 my-10  shadow-lg">
                    <div className=" w-40 text-sm p-5 text-sm">
                        {/* <h1>PROFILE DETAILS</h1> */}
                        <div className="relative flex justify-center">
                            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                            <FaRegUser className=" mx-auto h-auto w-32 border rounded-full" />
                        </div>
                    </div>
                    <div className="LIST w-full mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <div className="w-full flex justify-between py-3">
                            <p className="font-bold">Full Name: </p>
                            <p className="font-bold">{sellerDetails.name || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-medium py-3">
                            <p >Email ID:</p>
                            <p > {sellerDetails.email || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-medium py-3">
                            <p >GST Number:</p>
                            <p > {sellerDetails.gstNumber || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-medium py-3">
                            <p >Mobile:</p>
                            <p > {sellerDetails.mobile || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-medium py-3">
                            <p>Address:</p>
                            <p>{sellerDetails.address || "Not provided"}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate("/seller/editSellerProfile")} className="text-white bg-slate-700 w-5/6 border rounded-md mt-2">Edit Details</button>
                    <button onClick={handleLogout} className="text-white bg-slate-700 w-5/6 border rounded-md mt-2">Logout</button>
                    <button onClick={() => navigate("/seller/addProduct")} className="text-white bg-slate-700 w-5/6 border rounded-md mt-2">Add products</button>
                </div>
            </div>


            <h1>My Products</h1>
            <div className="flex justify-start wrap ">
                <div className="flex ">
                    {
                        sellerDetails?.products?.map((product) => {
                            //if (product.title.match(/iphone/i)) {
                            //if (product.title.match(new RegExp(searchValue, 'i')) && (params?.category ? params.category === product.category : true)) {
                            //if (product.title.toLowerCase().includes(searchValue))) {
                            return (
                                <div key={product._id}>
                                    <Card product={product} />
                                </div>
                            )
                            //}
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default SellerProfile;