import Container from "../Container";
import "./Footer.css"
import List from "../utils/List";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container>
            <div className="Footer">
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
                    <h1>About Us:</h1>
                    <p>At our electronics store, we are dedicated to providing the latest and greatest devices and accessories to our customers. With a wide selection of phones, TVs, laptops, watches, and accessories.</p>
                    <p>© 2023 E-Shop. All rights reserved.</p>
                </List>

                <List>
                    <p>hello</p>
                    <Link to='/'></Link>
                    <Link to='/'>FB</Link>
                    <Link to='/'>INSTA</Link>
                    <Link to='/'></Link>
                    <Link to='/'></Link>
                </List>
            </div>
        </Container>

    );
}

export default Footer;