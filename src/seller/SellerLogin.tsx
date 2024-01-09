import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useContext, useState } from "react";
import { ContextInit } from "../context/Context";
import { SellerContext } from "../context/SellerContext";
import { ContextItems } from "../context/SellerContext";
import { sellerInterface } from "../context/SellerContext"

const SellerLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const context = useContext(SellerContext) as ContextItems;
    const { sellerLogin, setSellerLogin, sellerDetails, setSellerDetails } = context;

    const getToken = () => {
        //console.log(document.cookie);
        const cookieArray = (document.cookie).split(';');
        //console.log(cookieArray);

        const token = cookieArray.find(cookie => {
            const cookieItems = cookie.split('=');
            return cookieItems[0].trim() === "sellerToken";
        });
        //console.log(token);
        const tokenValue = token?.split("=")[1];

        return tokenValue || "";
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please enter all fields!");
            return;
        }
        try {
            const response = await fetch("http://localhost:4000/seller/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email, password
                })
            });
            if (!response.ok) throw new Error('Something went wrong!');
            const res = await response.json();
            //console.log(res);
            // document.cookie = `sellerToken=${res.authToken}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            document.cookie = `sellerToken=${res.authToken};`;
            setSellerLogin(true);
            setSellerDetails({ ...res.sellerDetails, sellerToken: getToken() })
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
            //console.log("errreerer", er);
        }
    }


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
                            <button onClick={handleLogin} className="w-2/3 p-2 text-white bg-red-400 hover:bg-red-300 mt-10">Login</button>
                            <p>Forgot password <Link to='/seller/signup' className="text-blue-500">Register here</Link></p>

                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SellerLogin;