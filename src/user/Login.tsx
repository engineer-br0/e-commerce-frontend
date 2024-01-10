import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useState } from "react";
import { ContextInit } from "../context/Context";
import Loading from "../utils/Loading";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { isLogin, setIsLogin, setUser, loading, setLoading } = ContextInit();

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            alert("Fill all the mandatory details!");
            setLoading(false);
            return;
        }
        //console.log("handle login clikked");

        try {
            //const response = await fetch("https://e-commerce-backend-3smn.onrender.com/auth/login",
            const response = await fetch("http://localhost:4000/auth/login",
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
            setLoading(false)
            //console.log("login res", res, response.status);
            alert(res.message);
            //localStorage.setItem("token", res.access_token);
            if (response.status === 200) {
                document.cookie = `token=${res.token};`;
                //console.log(document.cookie);
                setIsLogin(true);
                setUser(res.user);
                //console.log(res);

                navigate("/");
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
                        <img src="/login.jpg" />
                    </div>

                    <div className=" flex w-1/2 flex-col gap-10  justify-center items-center py-20 relative z-0">
                        <div className="w-96 h-96 border rounded-lg shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10">
                            <h1>Login</h1>
                            <form className=" w-96 flex flex-col items-center">
                                <div className="flex flex-col w-72 gap-7  ">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                                </div>
                                <button onClick={handleLogin} className="w-2/3 p-2 text-white bg-slate-800 hover:bg-red-300 mt-10 mb-2 rounded-md">Login</button>
                                <p>Forgot password <Link to='/signup' className="text-blue-500">Register here</Link></p>
                                <p className="text-xs font-light text-yellow-700">Testing email: test1@gmail.com (Password : test1)</p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;