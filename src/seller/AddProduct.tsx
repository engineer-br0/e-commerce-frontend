import { useContext, useState } from "react";
import { ContextItems, SellerContext } from "../context/SellerContext";

const AddProduct = () => {
    const { sellerDetails } = useContext(SellerContext) as ContextItems;
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0.0);
    const [category, setCategory] = useState<string>("");
    console.log(sellerDetails);

    const AddProduct = async () => {
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `${sellerDetails.sellerToken}`
                }
            })
        }
        catch (er) {
            console.log(`Error: ${er}`);
        }
    }

    return (
        <>
            <form>
                <div className="flex justify-center gap-5 flex-wrap p-10">
                    <div className='flex flex-col items-center '>
                        <div className="flex flex-col gap-5 border w-96 text-xs p-5 text-left font-bold box-border">
                            <div className="flex justify-between">
                                <h1>Name</h1>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                            </div>
                            <div className="flex justify-between">
                                <h1>Description</h1>
                                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                            </div>
                            <div className="flex justify-between">
                                <h1>Price</h1>
                                <input type="number" min="0" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                            </div>
                            <div className="flex justify-between">
                                <h1>Rating</h1>
                                <input value={rating} type="number" min={0} step={0.5} onChange={(e) => setRating(parseFloat(e.target.value))} placeholder='Name*' className='border w-3/4 h-10 p-2' required />
                            </div>
                            <div className="flex justify-between">
                                <h1>Category</h1>
                                <select defaultValue={""} onChange={(e) => setCategory(e.target.value)} className="border w-3/4 h-10 p-2">
                                    <option value={""}>Select</option>
                                    <option value="smartphones">smartphones</option>
                                    <option value="laptops">laptops</option>
                                    <option value="fragrances">fragrances</option>
                                    <option value="skincare">skincare</option>
                                    <option value="groceries">groceries</option>
                                    <option value="home-decoration">home-decoration</option>
                                    <option value="furniture">furniture</option>
                                    <option value="womens-dresses">womens-dresses</option>
                                    <option value="womens-shoes">womens-shoes</option>
                                    <option value="mens-wear">mens-wear</option>
                                    <option value="mens-shirts">mens-shirts</option>
                                    <option value="mens-shoes">mens-shoes</option>
                                    <option value="watches">watches</option>
                                </select>
                            </div>


                        </div>
                        <button className="bg-green-500 w-96 mt-2 text-sm p-1">Add Product</button>

                    </div>
                </div>
            </form>
        </>
    );
}

export default AddProduct;