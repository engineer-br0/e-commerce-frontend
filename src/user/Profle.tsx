import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Profile = () => {
    const navigate = useNavigate();
    const { setIsLogin, user, rerender, setRerender } = ContextInit();

    useEffect(() => {
        setRerender(!rerender)
        console.log(user);
    }, [])


    const handleLogout = () => {
        const cookie = document.cookie;
        console.log("cookie", cookie);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;;`;
        console.log("cookie", cookie);
        setIsLogin(false);
    }
    return (
        <div className="flex flex-col items-center">
            <div className=" w-96 text-sm p-5 text-sm">
                <h1>PROFILE DETAILS</h1>
                <div className="flex justify-between">
                    <p className="font-bold">Full Name: </p>
                    <p className="font-bold">{user?.name || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p >Email ID:</p>
                    <p > {user?.email || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Gender: </p>
                    <p className="text-green-600">{user?.gender || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Mobile No:</p>
                    <p>{user?.mobile || "Not provided"}</p>
                </div>
                <div className="flex justify-between font-light">
                    <p>Address:</p>
                    <p>{user?.address || "Not provided"}</p>
                </div>
                <button onClick={() => navigate("/profile/edit")} className="bg-green-500 w-96 mt-2">Edit Details</button>
                <button onClick={handleLogout} className="bg-green-500 w-96 mt-2">Logout</button>


            </div>
        </div>
    );
}

export default Profile;