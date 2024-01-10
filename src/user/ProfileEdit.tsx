import { useState } from "react";
import { ContextInit } from "../context/Context";
import Loading from "../utils/Loading";

const ProfileEdit = () => {
    const { user, token, rerender, setRerender } = ContextInit();
    //console.log(user);

    const [name, setName] = useState<string>(user.name);
    const [gender, setGender] = useState<string>(user.gender);
    const [mobile, setMobile] = useState<string>(user.mobile);
    const [address, setAddress] = useState<string>(user.address);
    const [loading, setLoading] = useState<boolean>(false);

    const updateUser = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            //const response = await fetch("http://localhost:4000/user/updateUserData", {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/user/updateUserData", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userData: { name, gender, mobile, address } })
            });
            const res = await response.json();
            setLoading(false);
            //console.log(res);
            setRerender(!rerender)
        }
        catch (er) {
            setLoading(false);
            console.log(er);
        }
    }

    return (
        <>
            {loading && <Loading />}
            <div className="flex justify-center gap-5 flex-wrap p-10">
                <div className='flex flex-col items-center '>
                    <div className="flex flex-col gap-5 border w-96 text-xs p-5 text-left font-bold box-border">
                        <div className="flex justify-between">
                            <h1>Name</h1>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                        </div>
                        <div className="flex justify-between">
                            <h1>Gender</h1>
                            <select defaultValue={""} onChange={(e) => setGender(e.target.value)} className="border w-3/4 h-10 p-2">
                                <option value={""}>Select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <h1>Mobile No.</h1>
                            <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile No*' className='border w-3/4  h-10 p-2' required />
                        </div>

                        <div className="flex justify-between">
                            <h1>Adress</h1>
                            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='border w-3/4  h-10 p-2' required />
                        </div>


                    </div>
                    <button onClick={updateUser} className="bg-green-500 w-96 mt-2 text-sm p-1">SAVE DETAILS</button>

                </div>
            </div>
        </>
    );
}

export default ProfileEdit;