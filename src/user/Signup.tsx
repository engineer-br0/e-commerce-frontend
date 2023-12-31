import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";

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
            <div className="flex flex-col gap-10 border border-yellow-400 justify-center items-center py-20">
                <div className="w-96 border border-green-400 flex flex-col gap-10 bg-red-200 py-10">
                    <h1>Sign Up</h1>
                    <form className="border border-red-300 w-96 flex flex-col items-center">
                        <div className="flex flex-col w-72 ">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border border-black-100" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border border-black-100"></input>
                        </div>
                        <button onClick={handleSignup} className="w-2/3 bg-red-400 mt-10">Signup</button>
                        <p> Already registered  <Link to='/login' className="text-blue-500">Login here</Link></p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;