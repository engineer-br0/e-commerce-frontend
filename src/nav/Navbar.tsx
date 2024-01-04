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
//import { Dropdown } from 'flowbite-react';

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
        <Container>
            <div className="Navbar h-20 border-b border-black-300 flex flex-row justify-between items-center">
                {/* <div className="border border-blue-400" style={{ display: "flex", justifyContent: "space-between" }}> */}
                <Link to='/' className="logo">
                    <p className="font-sans font-bold"> Amazon</p>
                </Link>

                <div className="searchBar hidden lg:block ">
                    <SearchBar />
                </div>

                <div className="UserNCart flex flex-row cursor-pointer self-start items-center">
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

                    <div className="sm:hidden text-2xl mr-4 z-20" >
                        <Dropdown toggleFunc={toggleNavList} arr={[{ field: "My cart", path: "/cart" }, { field: "Wishlisht", path: "/" }, { field: "Signup", path: "/signup" }, { field: "Login", path: "/login" }, { field: "Profile", path: "/profile" }, { field: "Orders", path: "/profile/orders" }]}>
                            <FaListUl />
                        </Dropdown>


                    </div>

                </div>





                {/* </div> */}
            </div>
        </Container>
    );
}

export default Navbar;