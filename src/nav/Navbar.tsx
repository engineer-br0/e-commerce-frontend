import "./Navbar.css";
import Container from "../Container";
//import { Dancing_Script } from "next/font/google";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

//const rubik = Dancing_Script({ subsets: ["latin"], weight: ['400'] })

const Navbar = () => {
    return (
        <Container>
            <div className="Navbar">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to='/' className="logo">
                        E--Shop
                    </Link>
                    <div className="flex row">
                        <input className="search" placeholder="Search" />
                        <div style={{ fontSize: "35px", padding: "3px" }}>
                            search
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
                        <div style={{ fontSize: "35px" }}>
                            <FaRegUserCircle />
                            circle
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Navbar;