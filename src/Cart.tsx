import { ContextInit } from "./context/Context";
import Stars from "./utils/Stars";


const Carta = () => {
    const { products, cart, addToCart, removeFromCart } = ContextInit();
    console.log(products);
    console.log(cart);


    return (
        <div>
            {
                cart.map((obj) => {
                    let product = products.find(product => obj.productId == product.id); // matching only value, not data type
                    return (
                        product ?
                            <div>
                                <div className="imageContainer">
                                    <img className="image" src={product.thumbnail} width={150} height={150} alt="image" />
                                </div>

                                <h1 className="text-left text-xs font-bold">{product.title?.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h1>
                                <p className="text-xs text-left">{product.description?.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                                <p className="stars"><Stars rating={product.rating} /></p>
                                <p className="flex justify-start font-bold text-xm"> &#8377;{product.price} </p>
                                <button className="bg-red-200" onClick={() => {
                                    if (product) removeFromCart(product.id, 1);
                                    console.log(cart);
                                }}>Remove from Cart</button>
                            </div>
                            : <div></div>
                    )
                })
            }
        </div>);
}

export default Carta;