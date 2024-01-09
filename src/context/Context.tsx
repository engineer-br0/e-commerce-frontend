import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Product from "../products/[ProductId]";

interface CartItem {
    productId: number,
    quantity: number
}

interface userInterface {
    name: string,
    email: string,
    gender: string,
    mobile: string,
    address: string,
}

interface ordersInterface {
    products: [
        {
            productId: number,
            quantity: number
        }],
    shippingDetails: {
        name: string,
        address: string,
        mobile: string
    },
    bill: { [key: string]: any }
}

interface ContextItems {
    products: { [key: string]: any }[],
    cart: CartItem[],
    isLogin: boolean,
    user: userInterface,
    orders: ordersInterface[],
    setIsLogin: (isLogin: boolean) => void,
    token: string,
    searchValue: string,
    setSearchValue: (str: string) => void,
    setUser: (obj: userInterface) => void,
    //setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
    addToCart: (id: number, quantity: number) => void,
    removeFromCart: (id: number, quantity: number) => void,
    rerender: boolean,
    setRerender: (state: boolean) => void
}

export const Context = createContext<ContextItems | undefined>(undefined);

const ContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<{ [key: string]: any }[]>([]);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [rerender, setRerender] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>("");
    const [user, setUser] = useState<userInterface>({
        name: "",
        email: "",
        gender: "",
        mobile: "",
        address: ""
    });
    const [orders, setOrders] = useState<ordersInterface[]>([]);

    const getUserData = async () => {


        //const response = await fetch("http://localhost:4000/user/getUserData", {
        const response = await fetch("https://e-commerce-backend-3smn.onrender.com/user/getUserData", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const res = await response.json();
        //console.log("user aya", res);
        setUser(res.user)

    }

    const getOrders = async () => {
        try {
            //const response = await fetch("http://localhost:4000/orders/getOrders", {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/orders/getOrders", {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            const res = await response.json();
            //console.log("orders aya", res);
            setOrders(res.orders)
        }
        catch (er) {
            //console.log("error ocured", er);

        }
    }

    const getCookie = () => {
        const cookies = (document.cookie)?.split(";");
        if (!cookies || !cookies[0]) return false;
        cookies.forEach(cookie => {
            if (cookie.includes("token=")) {
                let tokenValue = cookie.replace("token=", "").trim();
                if (tokenValue.length === 0) return false;
                setIsLogin(true);
                setToken(cookie.split("=")[1]);
            }
        })
    }

    const addToCart = async (id: number, quantity: number) => {
        if (!isLogin) {
            alert("Login to use cart!")

            return;
        }

        try {
            //const response = await fetch("https://e-commerce-backend-3smn.onrender.com/manageCart/addToCart", {
            const response = await fetch("http://localhost:4000/manageCart/addToCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    productId: id,
                    quantity: quantity
                })
            });
            const res = await response.json();
            //console.log("cart res", res);
            //setCart(res.)
            setRerender(!rerender)
        }
        catch (er) {
            //console.log(`ERROR! ${er}`);
        }
        // let itemInCartIndex = cart.findIndex((item: CartItem) => item.id === id);
        // if (itemInCartIndex === -1) setCart([...cart, { id: id, quantity: 1 }]);
        // else {
        //     let newCart = cart;
        //     newCart[itemInCartIndex].quantity += 1;
        //     setCart(newCart);
        // }
        rerender ? setRerender(false) : setRerender(true);
    }

    const removeFromCart = async (id: number, quantity: number) => {
        try {
            //const response = await fetch("https://e-commerce-backend-3smn.onrender.com/manageCart/removeFromCart", {
            const response = await fetch("http://localhost:4000/manageCart/removeFromCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ productId: id, quantity })
            });
            const res = await response.json();
            //console.log(res);

        }
        catch (er) {
            //console.log(er);

        }
        // let itemInCartIndex = cart.findIndex((item: CartItem) => item.productId === id);
        // let newCart = [...cart];
        // if (newCart[itemInCartIndex].quantity > 1) newCart[itemInCartIndex].quantity--;
        // else newCart.splice(itemInCartIndex, 1);
        // setCart(newCart);
        setRerender(!rerender);
    }

    const fetchCart = async () => {
        try {
            //const response = await fetch("http://localhost:4000/manageCart/getCart", {
            const response = await fetch("https://e-commerce-backend-3smn.onrender.com/manageCart/getCart", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const res = await response.json();
            //console.log("caart res", res);
            if (response.status === 200) setCart(res.products);
        }
        catch (er) {
            //console.log("error in cart fetch", er);
            //alert("Error in cart fetch!");

        }
    }

    const fetchProducts = async () => {
        try {
            // fetching from dummy database
            const response = await fetch('https://dummyjson.com/products');
            const res = await response.json();
            ////console.log(res.products);
            setProducts(res.products);

            try {
                //fetching from mongo
                const response = await fetch('http://localhost:4000/getProducts');
                const res = await response.json();
                //console.log(res.products);
                const productRef = res.products;
                setProducts(prev => [...prev, ...productRef]);

            }
            catch (er) {
                //console.log("Error getting products from server");

            }

        }
        catch (er) {
            //console.log(er);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        getCookie();
        (token && getUserData());
        if (isLogin && token) fetchCart();
        if (isLogin && token) getOrders();
    }, [isLogin, rerender, token])

    useEffect(() => {
        //console.log(products);

    }, [products]);

    return (
        <Context.Provider value={{ products, cart, user, setUser, orders, isLogin, setIsLogin, token, addToCart, removeFromCart, searchValue, setSearchValue, rerender, setRerender }}>
            {children}
            {/* <CustomAlert isOpen={isNotification} message={notification} /> */}
        </Context.Provider>
    );
}

export const ContextInit = (): ContextItems => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};


export default ContextWrapper;