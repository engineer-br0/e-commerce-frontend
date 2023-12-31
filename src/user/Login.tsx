import { Link } from "react-router-dom";
import Container from "../Container";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("handle login clikked");

        try {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/auth/login",
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
            console.log("login res", res, response.status);
            //localStorage.setItem("token", res.access_token);
            if (response.status === 200) {
                document.cookie = `token=${res.token};`;
                console.log(document.cookie);
            }


        }
        catch (er) {
            console.log("error hai", er);
        }
    }
    return (
        <>
            <div className="flex flex-col gap-10 border border-yellow-400 justify-center items-center py-20">
                <div className="w-96 border border-green-400 flex flex-col gap-10 bg-red-200 py-10">
                    <h1>Login</h1>
                    <form className="border border-red-300 w-96 flex flex-col items-center">
                        <div className="flex flex-col w-72 ">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border border-black-100" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border border-black-100"></input>
                        </div>
                        <button onClick={handleLogin} className="w-2/3 bg-red-400 mt-10">Login</button>
                        <p>Forgot password <Link to='/signup' className="text-blue-500">Register here</Link></p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;