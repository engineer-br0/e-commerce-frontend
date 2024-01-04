import Container from "../Container";
import "./Footer.css"
import List from "../utils/List";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <Container>
            <div className="Footer text-xs">
                <List>
                    <h1>Shop Categories:</h1>
                    <Link to='/smartphones'>Phones</Link>
                    <Link to='/laptops'>Laptops</Link>
                    <Link to='/fragrances'>Fragrances</Link>
                    <Link to='/skincare'>Skincare</Link>
                    <Link to='/groceries'>Groceries</Link>
                    <Link to='/home-decoration'>Home Decor</Link>
                </List>

                <List>

                    <h1>Customer Services:</h1>
                    <Link to='/'>Contact Us</Link>
                    <Link to='/'>Shipping Policy</Link>
                    <Link to='/'>Returns and Exchanges</Link>
                    <Link to='/'>Watches</Link>
                    <Link to='/'>FAQs</Link>
                </List>

                <List>
                    <h1>Contact us:</h1>
                    <div className="flex justify-around">

                        <Link to='/'></Link>
                        <Link to='/'>
                            <IoLogoFacebook className="text-3xl" />
                        </Link>
                        <Link to='/' >
                            <FaInstagram className="text-3xl" />
                        </Link>
                        <Link to='/'>
                            <HiOutlineMail className="text-3xl" />
                        </Link>
                        <Link to='/'></Link>

                    </div>
                    <p>© 2023 E-Shop. All rights reserved.</p>
                </List>
            </div>
        </Container>

    );
}

export default Footer;