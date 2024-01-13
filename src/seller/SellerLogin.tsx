import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useContext, useState } from "react";
import { ContextInit } from "../context/Context";
import { SellerContext } from "../context/SellerContext";
import { ContextItems } from "../context/SellerContext";
import { sellerInterface } from "../context/SellerContext"
import Loading from "../utils/Loading";

const SellerLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const context = useContext(SellerContext) as ContextItems;
    const { sellerLogin, setSellerLogin, sellerDetails, setSellerDetails } = context;

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            alert("Please enter all fields!");
            setLoading(false);
            return;
        }
        try {
            //const response = await fetch("http://localhost:4000/seller/auth/login", {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/seller/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const res = await response.json();
            alert(res.message);
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
            setLoading(false);
            //console.log(getToken());

            //setSellerDetails({ ...(res.sellerDetails), sellerToken: ((((document.cookie).split(';')).find(cookie => cookie.split("="))[0] === "sellerToken")?.split("=")[1]) });
            // setSellerDetails((prev: sellerInterface) => {
            //     return prev;
            // });

            // (((document.cookie).split(';')).map((cookie) => { return cookie.split('=')[0] === "sellerToken" ? cookie.split('=')[0] : ""; }));
            //console.log(sellerDetails, sellerLogin);
            //console.log(document.cookie);
        }
        catch (er) {
            setLoading(true);
            console.log("errreerer", er);
        }
    }


    return (
        <>
            <Container>
                {loading && <Loading />}
                <div className="flex justify-center">


                    <div className="hidden sm:block w-1/2">
                        <img src="/login.jpg" />
                    </div>

                    <div className=" flex w-1/2 flex-col gap-10  justify-center items-center py-20">
                        <div className="w-96 h-96 border rounded-lg shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10">
                            <h1 className="font-bold">Seller Login</h1>
                            <form className=" w-96 flex flex-col items-center">
                                <div className="flex flex-col w-72 gap-7  ">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                                </div>
                                <button onClick={handleLogin} className="w-2/3 p-2 text-white bg-slate-800 hover:bg-red-300 mt-10 mb-2 rounded-md">Login</button>
                                <p>Forgot password <Link to='/seller/signup' className="text-blue-500">Register here</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SellerLogin;