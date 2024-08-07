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
import SearchBar from "../home/SearchBar";
import { FaListUl } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

//const rubik = Dancing_Script({ subsets: ["latin"], weight: ['400'] })

const Navbar = () => {

    //const [searchVal, setSearchVal] = useState<string>("");
    const navigation = useNavigate();
    const [userDropdown, setUserDropdown] = useState<boolean>(false);
    const [cartDropdown, setCartDropdown] = useState<boolean>(false);
    const [navList, setNavList] = useState<boolean>(false);


    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
    }
    const toggleCartDropdown = () => {
        setCartDropdown(!cartDropdown);
    }

    const toggleNavList = () => {
        setNavList(!navList);
    }

    return (
        <div className="Navbar z-50 border-b border-black-300">
            {/* IF YOU WANT TO SHOW DROPDOWN ABOVE ALL OTHER COMPONENTS THEN GIVE Z INDEX TO NAV  */}
            <div className=" relative  flex flex-row justify-between items-center">
                {/* <div className="border border-blue-400" style={{ display: "flex", justifyContent: "space-between" }}> */}
                <Link to='/' className="logo">
                    <p className="font-sans font-bold"> <p className="text-sm">Mridul Bhai ka</p> Amazon</p>
                </Link>

                <div className="searchBar hidden lg:block ">
                    <SearchBar />
                </div>

                <div className="UserNCart flex flex-row cursor-pointer  items-center">
                    <div className="hidden sm:block text-2xl mr-4">
                        <Dropdown toggleFunc={toggleCartDropdown} arr={[{ field: "My cart", path: "/cart" }, { field: "Wishlisht", path: "/" }]} >
                            <IoCartOutline className="text-2xl self-center" />
                            <p className="text-base text-black font-bold">Cart</p>
                        </Dropdown>
                    </div>

                    <div className="hidden sm:block text-2xl mr-4">
                        <Dropdown toggleFunc={toggleUserDropdown} arr={[{ field: "Signup", path: "/signup" }, { field: "Login", path: "/login" }, { field: "Profile", path: "/profile" }, { field: "Orders", path: "/profile/orders" }]} >
                            <HiOutlineUserCircle className="text-2xl" />
                            <p className="text-base text-black font-bold">User</p>
                        </Dropdown>
                    </div>

                    <div className="hidden sm:block text-2xl mr-4">
                        <Dropdown toggleFunc={toggleUserDropdown} arr={[{ field: "Signup", path: "/seller/signup" }, { field: "Login", path: "seller/login" }, { field: "Profile", path: "/seller/profile" }]} >
                            <CiShop className="text-2xl" />
                            <p className="text-base text-black font-bold">Become a Seller</p>
                        </Dropdown>
                    </div>

                    {/*  for small sizes mobile view... */}
                    <div className="sm:hidden text-2xl mr-4 z-20" >
                        <Dropdown toggleFunc={toggleNavList} arr={[{ field: "User Login", path: "/login" }, { field: "My cart", path: "/cart" }, { field: "User Profile", path: "/profile" }, { field: "My Orders", path: "/profile/orders" }, { field: "Seller", path: "/seller/login" }]}>
                            <FaListUl />
                        </Dropdown>


                    </div>

                </div>





                {/* </div> */}
            </div>
        </div>
    );
}

export default Navbar;