import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import logout from "./logout";
import Loading from "../utils/Loading";


const Profile = () => {
    const navigate = useNavigate();
    const { setIsLogin, user, rerender, setRerender, setToken } = ContextInit();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setRerender(!rerender)
        console.log(user);
    }, [])


    const handleLogout = (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (logout()) {
            alert("Successfully Logged out!");
            setIsLogin(false);
            setToken("");

        }
        else alert("error occured!")
        setLoading(false)

    }
    return (
        <>
            {loading && <Loading />}
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
                            <p className="font-bold">{user?.name || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-medium py-3">
                            <p >Email ID:</p>
                            <p > {user?.email || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-light font-medium py-3">
                            <p>Gender: </p>
                            <p className="text-green-600">{user?.gender || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-light font-medium py-3">
                            <p>Mobile No:</p>
                            <p>{user?.mobile || "Not provided"}</p>
                        </div>
                        <div className="w-full flex justify-between text-sm font-light font-medium py-3">
                            <p>Address:</p>
                            <p>{user?.address || "Not provided"}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate("/profile/edit")} className="text-white bg-slate-700 w-5/6 border rounded-md mt-2">Edit Details</button>
                    <button onClick={() => navigate("/profile/orders")} className="text-white bg-slate-700 w-5/6 border rounded-md mt-2">My orders</button>
                    <button onClick={handleLogout} className="text-white bg-slate-700 w-5/6 rounded-md mt-2">Logout</button>


                </div>
            </div>
        </>
    );
}

export default Profile;