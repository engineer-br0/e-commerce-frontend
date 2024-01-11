import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Container from "../Container";
import Loading from "../utils/Loading";
import { ContextItems, SellerContext, sellerInterface } from "../context/SellerContext";

const SellerSignup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [gstNumber, setGstNumber] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { setSellerDetails, setSellerLogin } = useContext(SellerContext) as ContextItems;

    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoading(true);

        if (!name || !email || !password || !gstNumber) {
            alert("Fill all the mandatory details!");
            setLoading(false)
            return;
        }
        try {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/seller/auth/signup",
                //const response = await fetch("http://localhost:4000/seller/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        gstNumber
                    })
                });
            const res = await response.json();
            setLoading(false)
            if (response.ok) {
                setLoading(false);
                console.log(res);
                alert("Seller login successfully!");
                // document.cookie = `sellerToken=${res.authToken}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
                document.cookie = `sellerToken=${res.authToken};`;
                setSellerLogin(true);
                setSellerDetails({ ...res.sellerDetails, sellerToken: res.authToken })
                navigate("/seller/profile")
            }
        }
        catch (er) {
            setLoading(false)
            //console.log("error hai", er);
        }
    }

    return (
        <>
            <Container>
                {loading && <Loading />}
                <div className="flex justify-center">
                    <div className="hidden sm:block w-1/2">
                        <img src="/signup.jpg" />
                    </div>

                    <div className=" flex w-1/2 flex-col gap-10  justify-center items-center py-20 ">
                        <div className="w-96 border rounded-lg shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10 py-15 ">
                            <h1 className="font-bold">Seller Signup</h1>
                            <form className=" w-96 flex flex-col items-center ">
                                <div className="flex flex-col w-72 gap-5 ">
                                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                                    <input value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} placeholder="GST number" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                                </div>
                                <button onClick={handleSignup} className="w-2/3 p-2 text-white bg-slate-800 hover:bg-red-300 mt-10 mb-2 rounded-md ">Signup</button>
                                <p>Already registered <Link to='/seller/login' className="text-blue-500">Login here</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SellerSignup;