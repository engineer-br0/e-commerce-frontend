import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Container from "../Container";

const Signup = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigation = useNavigate();
    const { isLogin, token } = ContextInit();

    useEffect(() => {
        if (isLogin) {
            alert("already logged in!!!");
            navigation("/");
        }
        // const cookies = (document.cookie).split(";");
        // cookies.forEach(cookie => {
        //     if (cookie.includes("token=")) {
        //         alert("already logged in!!!");
        //         navigation("/");
        //     }
        // });
    }, [])

    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
            const res = await response.json();
            console.log("signup res", res);

        }
        catch (er) {
            console.log("error hai", er);
        }
    }

    return (
        <>
            <Container>
                <div className=" flex flex-col gap-10 bg-blue-100 justify-center items-center py-20">
                    <div className="w-96 border  shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10">
                        <h1>Login</h1>
                        <form className=" w-96 flex flex-col items-center">
                            <div className="flex flex-col w-72 gap-5 ">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                            </div>
                            <button onClick={handleSignup} className="w-2/3 bg-red-400 mt-10">Login</button>
                            <p>Forgot password <Link to='/signup' className="text-blue-500">Register here</Link></p>

                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Signup;