import Container from "../Container";
import { HiOutlineUserCircle } from "react-icons/hi2";


const Profile = () => {
    return (
        <Container>
            <div className=" flex flex-col gap-10 bg-blue-100 justify-center items-center py-20">
                <div className="w-96 border  shadow-2xl backdrop-blur flex flex-col gap-3 items-center bg-white py-10">
                    <HiOutlineUserCircle className="text-5xl" />
                    <h1>Mridul Sharma</h1>
                    <p>email: test1@gmail.com</p>
                </div>
            </div>
        </Container>
    );
}

export default Profile;