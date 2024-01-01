import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { ContextInit } from "../context/Context";


const Profile = () => {
    const { setIsLogin } = ContextInit();
    const handleLogout = () => {
        const cookie = document.cookie;
        console.log("cookie", cookie);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;;`;
        console.log("cookie", cookie);
        setIsLogin(false);
    }
    return (
        <Container>
            <div className=" flex flex-col gap-10 bg-blue-100 justify-center items-center py-20">
                <div className="w-96 border  shadow-2xl backdrop-blur flex flex-col gap-3 items-center bg-white py-10">
                    <HiOutlineUserCircle className="text-5xl" />
                    <h1>Mridul Sharma</h1>
                    <p>email: test1@gmail.com</p>
                    <button onClick={handleLogout} className="w-2/3 bg-red-500">Logout</button>
                </div>
            </div>
        </Container>
    );
}

export default Profile;