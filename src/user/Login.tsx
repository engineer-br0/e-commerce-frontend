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
            <Container>
                <div className=" flex flex-col gap-10 bg-blue-100 justify-center items-center py-20">
                    <div className="w-96 border  shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10">
                        <h1>Login</h1>
                        <form className=" w-96 flex flex-col items-center">
                            <div className="flex flex-col w-72 gap-5 ">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                            </div>
                            <button onClick={handleLogin} className="w-2/3 bg-red-400 mt-10">Login</button>
                            <p>Forgot password <Link to='/signup' className="text-blue-500">Register here</Link></p>

                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;