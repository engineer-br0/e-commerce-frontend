import Container from "../Container";
import "./Footer.css"
import List from "../utils/List";
//import Link from "next/link";

const Footer = () => {
    return (
        <Container>
            <div className="Footer">
                <List>
                    <h1>Shop Categories:</h1>
                    {/* <Link href='/'>Phones</Link>
                    <Link href='/'>Laptops</Link>
                    <Link href='/'>Desktops</Link>
                    <Link href='/'>Watches</Link>
                    <Link href='/'>Accessories</Link> */}
                </List>

                <List>
                    <h1>Customer Services:</h1>
                    {/* <Link href='/'>Contact Us</Link>
                    <Link href='/'>Shipping Policy</Link>
                    <Link href='/'>Returns and Exchanges</Link>
                    <Link href='/'>Watches</Link>
                    <Link href='/'>FAQs</Link> */}
                </List>

                <List>
                    <h1>About Us:</h1>
                    <p>At our electronics store, we are dedicated to providing the latest and greatest devices and accessories to our customers. With a wide selection of phones, TVs, laptops, watches, and accessories.</p>
                    <p>© 2023 E-Shop. All rights reserved.</p>
                </List>

                <List>
                    <p>hello</p>
                    {/* <Link href='/'></Link>
                    <Link href='/'>FB</Link>
                    <Link href='/'>INSTA</Link>
                    <Link href='/'></Link>
                    <Link href='/'></Link> */}
                </List>
            </div>
        </Container>

    );
}

export default Footer;