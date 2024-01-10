import { useNavigate } from "react-router-dom";

const Seller404 = () => {
    const navigate = useNavigate();
    return (
        <div className=" flex w-full flex-col gap-10  justify-center items-center">
            <div className="w-96 border rounded-lg shadow-2xl backdrop-blur flex flex-col items-center gap-10 bg-white py-10">
                <div>
                    <h1 className="font-bold">Seller not found!</h1>
                </div>
                <button onClick={() => navigate("/seller/login")} className="w-2/3 p-2 text-white bg-slate-800 hover:bg-red-300 mt-10 rounded-md">Login</button>
            </div>
        </div>
    );
}

export default Seller404;