import "./Navbar.css";
import Container from "../Container";
//import { Dancing_Script } from "next/font/google";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { ContextInit } from "../context/Context";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../utils/Dropdown";
//import { Dropdown } from 'flowbite-react';

//const rubik = Dancing_Script({ subsets: ["latin"], weight: ['400'] })

const Navbar = () => {

    //const [searchVal, setSearchVal] = useState<string>("");
    const navigation = useNavigate();
    const [tempValue, setTempValue] = useState<string>("");
    const { searchValue, setSearchValue } = ContextInit();
    const [userDropdown, setUserDropdown] = useState<boolean>(false);
    const [cartDropdown, setCartDropdown] = useState<boolean>(false);


    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
    }
    const toggleCartDropdown = () => {
        setCartDropdown(!cartDropdown);
    }

    return (
        <Container>
            <div className="Navbar h-20 border-b border-black-300 flex flex-row justify-between items-center">
                {/* <div className="border border-blue-400" style={{ display: "flex", justifyContent: "space-between" }}> */}
                <Link to='/' className="logo">
                    <p className="font-sans"> Amazon</p>
                </Link>

                <div className="flex row items-center">
                    <input value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="search font-serif h-10 p-2 pr-7 border-b border-black-400 outline-0 focus:border-black bg-gray-200 focus:bg-transparent" placeholder="Search" />
                    <RiDeleteBack2Line className="relative right-6 cursor-pointer" onClick={() => { setTempValue(""); setSearchValue("") }} />
                    <div style={{ fontSize: "35px", padding: "3px" }}>
                        <CiSearch onClick={(e) => setSearchValue(tempValue)} className="cursor-pointer" />
                    </div>

                </div>

                <div className="UserNCart flex flex-row cursor-pointer self-start">
                    <div onClick={toggleCartDropdown}>
                        <div className="userContainer">
                            <IoCartOutline className="text-2xl self-center" />
                            <p className="text-base text-black font-bold">Cart</p>
                        </div>
                        {
                            cartDropdown && <Dropdown arr={[{ field: "My cart", path: "/cart" }, { field: "Wishlisht", path: "/" }]} />
                        }
                    </div>
                    <div className="">
                        {/* onClick={() => navigation("/login")} */}
                        <div onClick={toggleUserDropdown} className="userContainer flex flex-col items-center">
                            <HiOutlineUserCircle className="text-2xl" />
                            <p className="text-base text-black font-bold">User</p>
                        </div>
                        <div>
                            {
                                userDropdown && <Dropdown arr={[{ field: "Signup", path: "/signup" }, { field: "Login", path: "/login" }, { field: "Profile", path: "/profile" }, { field: "Logout", path: "/" }]} />
                            }
                        </div>
                    </div>
                </div>



                {/* </div> */}
            </div>
        </Container>
    );
}

export default Navbar;