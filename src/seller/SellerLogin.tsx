import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useContext, useState } from "react";
import { ContextInit } from "../context/Context";
import { SellerContext } from "../context/SellerContext";

const SellerLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { sellerLogin } = useContext(SellerContext);
    console.log(sellerLogin);


    return (
        <>
            <Container>
                <div className=" flex flex-col gap-10 bg-blue-100 justify-center items-center py-20">
                    <div className="w-96 border  shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10">
                        <h1>Seller Login </h1>
                        <form className=" w-96 flex flex-col items-center">
                            <div className="flex flex-col w-72 gap-5 ">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                            </div>
                            <button className="w-2/3 p-2 text-white bg-red-400 hover:bg-red-300 mt-10">Login</button>
                            <p>Forgot password <Link to='/seller/signup' className="text-blue-500">Register here</Link></p>

                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SellerLogin;