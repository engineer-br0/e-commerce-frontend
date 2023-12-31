import "./Navbar.css";
import Container from "../Container";
//import { Dancing_Script } from "next/font/google";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

//const rubik = Dancing_Script({ subsets: ["latin"], weight: ['400'] })

const Navbar = () => {
    const navigation = useNavigate();
    return (
        <Container>
            <div className="Navbar h-20">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to='/' className="logo">
                        E--Shop
                    </Link>
                    <div className="flex row">
                        <input className="search h-20" placeholder="Search" />
                        <div style={{ fontSize: "35px", padding: "3px" }}>
                            <CiSearch />
                        </div>

                    </div>

                    <div className="flex row UserNCart">
                        <Link to="/cart">
                            <div style={{ fontSize: "35px" }}>
                                <IoCartOutline />
                                Cart
                            </div>
                        </Link>
                        <div onClick={() => navigation("/login")} className="text-xl text-black font-medium">
                            <HiOutlineUserCircle className="text-5xl" />
                            User
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Navbar;