import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface CartItem {
    id: number,
    quantity: number
}

interface ContextItems {
    products: { [key: string]: any }[],
    cart: CartItem[],
    //setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
    addToCart: (id: number) => void,
    removeFromCart: (id: number) => void
}

export const Context = createContext<ContextItems | undefined>(undefined);

const ContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<{ [key: string]: any }[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const res = await response.json();
                //console.log(res.products);
                setProducts(res.products);
                //console.log(dummyProducts);

            }
            catch (er) {
                console.log(er);
            }
        }

        fetchProducts();
    }, [])

    const addToCart = (id: number) => {
        let itemInCartIndex = cart.findIndex((item: CartItem) => item.id === id);
        if (itemInCartIndex === -1) setCart([...cart, { id: id, quantity: 1 }]);
        else {
            let newCart = cart;
            newCart[itemInCartIndex].quantity += 1;
            setCart(newCart);
        }
    }

    const removeFromCart = (id: number) => {
        let itemInCartIndex = cart.findIndex((item: CartItem) => item.id === id);
        let newCart = [...cart];
        if (newCart[itemInCartIndex].quantity > 1) newCart[itemInCartIndex].quantity--;
        else newCart.splice(itemInCartIndex, 1);
        setCart(newCart);
    }

    return (
        <Context.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {children}
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