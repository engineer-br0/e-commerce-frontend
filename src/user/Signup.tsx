import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import Container from "../Container";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { isLogin, setIsLogin, token, setUser } = ContextInit();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isLogin) {
            alert("already logged in!!!");
            navigate("/");
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
        if (!name || !email || !password) {
            alert("Fill all the mandatory details!");
            return;
        }
        try {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/auth/signup",
                //const response = await fetch("http://localhost:4000/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                });
            const res = await response.json();
            //console.log("signup res", res);
            document.cookie = `token=${res.token};`;
            //console.log(document.cookie);
            alert(res.message)
            setUser(res.user);
            //setIsLogin(false);
            setIsLogin(true)
            alert("User Signup successful!")
            navigate("/")
        }
        catch (er) {
            //console.log("error hai", er);
        }
    }

    return (
        <>
            <Container>
                <div className="relative flex justify-center">
                    <p className="absolute my-20 bg-grey-400 text-xxl">
                        {loading && <h1>Loading... Please wait!</h1>}
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="hidden sm:block w-1/2">
                        <img src="/signup.jpg" />
                    </div>

                    <div className=" flex w-1/2 flex-col gap-10  justify-center items-center py-20 ">
                        <div className="w-96 border rounded-lg shadow-2xl backdrop-blur flex flex-col gap-10 bg-white py-10 py-15 ">
                            <h1 className="font-bold">User Signup</h1>
                            <form className=" w-96 flex flex-col items-center">
                                <div className="flex flex-col w-72 gap-5 ">
                                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="outline-0 border-b border-gray-400 focus:border-black " />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-0 border-b border-gray-400 focus:border-black"></input>
                                </div>
                                <button onClick={handleSignup} className="w-2/3 p-2 text-white bg-slate-800 hover:bg-red-300 mt-10 mb-2 rounded-md">Signup</button>
                                <p>Already registered <Link to='/login' className="text-blue-500">Login here</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Signup;