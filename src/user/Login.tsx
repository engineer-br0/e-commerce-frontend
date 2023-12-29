import { Link } from "react-router-dom";
import Container from "../Container";

const Login = () => {
    return (
        <>
            <div className="flex flex-col gap-10 border border-yellow-400 justify-center items-center py-20">
                <div className="w-96 border border-green-400 flex flex-col gap-10 bg-red-200 py-10">
                    <h1>Login</h1>
                    <form className="border border-red-300 w-96 flex flex-col items-center">
                        <div className="flex flex-col w-72 ">
                            <input placeholder="Email" className="border border-black-100" />
                            <input placeholder="Password" className="border border-black-100"></input>
                        </div>
                        <button className="w-2/3 bg-red-400 mt-10">Login</button>
                        <p>Forgot password <Link to='/' className="text-blue-500">Register here</Link></p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;