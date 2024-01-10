import { useContext, useState } from "react";
import { ContextItems, SellerContext } from "../context/SellerContext";
import { app } from "../firebase/firebaseConfig"
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import { Context, ContextInit } from "../context/Context";
import Loading from "../utils/Loading";

const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images/')

const AddProduct = () => {
    const navigate = useNavigate();
    const { rerender, setRerender } = ContextInit();
    const { sellerDetails, sellerRerender, setSellerRerender } = useContext(SellerContext) as ContextItems;
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0.0);
    const [category, setCategory] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [images, setImages] = useState<FileList | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    //console.log(sellerDetails);


    const handleThumbnailChange = (e: any) => {
        setLoading(true);
        if (e.target.files) {

            const selectedImage = e.target.files[0];
            const maxSize = 1024 * 500; // 500 KB
            if (selectedImage.size > maxSize) {
                alert("Thumbnail size must be less than 500 KB");
                e.target.value = null;

            }
            else setThumbnail(selectedImage);
            setLoading(false)
        }
    };

    const handleImagesChange = (e: any) => {
        setLoading(true);
        //console.log("hanle images change!!");
        const selectedImages: FileList = e.target.files;
        if (e.target.files) {
            const maxSize = 1024 * 500; // 500 KB
            selectedImages && Array.from(selectedImages).forEach((image) => {
                //console.log("size", image.size);

                if (image.size > maxSize) {
                    alert('All image sizes should be less than 500 KB');
                    e.target.value = null;
                }
            })

            setImages(selectedImages);
        }
        setLoading(false);
    };

    const AddProduct = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        //console.log(images);
        //console.log(thumbnail);


        if (!title || !description || !price || !rating || !category || !thumbnail || !images?.length) {
            alert("Fill all the mandatory details!");
            setLoading(false)
            return;
        }

        try {
            // Upload image to Firebase Storage
            let imagesArray: string[] = [];
            images && await Promise.all(Array.from(images).map(async (image, index) => {
                //console.log("index", image.name);

                const imageRef = ref(storageRef, 'images/' + image.name);
                const uploadTask = await uploadBytes(imageRef, image);
                const downloadUrl = await getDownloadURL(imageRef);
                //console.log("index", downloadUrl);

                imagesArray.push(downloadUrl)
            }));
            const imageRef = ref(storageRef, 'thumbnails/' + thumbnail?.name);
            const uploadTask = thumbnail && await uploadBytes(imageRef, thumbnail);
            const downloadThumbnailUrl = await getDownloadURL(imageRef);
            //console.log(downloadThumbnailUrl);
            //console.log(imagesArray);

            if (!downloadThumbnailUrl || !imagesArray.length) {
                //console.log("download url not found!")
                setLoading(false);
            }
            else {
                //const response = await fetch("http://localhost:4000/seller/details/addProduct", {
                const response = await fetch("https://e-commerce-backend-3smn.onrender.com/seller/details/addProduct", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sellerDetails.sellerToken}`
                    },
                    body: JSON.stringify({ product: { title, description, price, rating, category, thumbnail: downloadThumbnailUrl, images: imagesArray } })
                });
                const res = await response.json();
                if (response.ok) {
                    setLoading(false);
                    //console.log(res);
                    alert(res.message)
                    setRerender(!rerender);
                    setSellerRerender(!sellerRerender)
                    navigate("/seller/profile");
                }
            }

        }
        catch (er) {
            console.error(er);
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <Loading />}
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
                                <input type="number" min="0" value={price} onFocus={e => price === 0 && (e.target.value = "")} onChange={(e) => { setPrice(parseFloat(e.target.value)) }} placeholder="Price" className='border w-3/4 h-10 p-2' required />
                            </div>
                            <div className="flex justify-between">
                                <h1>Rating</h1>
                                <input value={rating} type="number" min={0} step={0.5} onFocus={e => rating === 0 && (e.target.value = "")} onChange={(e) => setRating(parseFloat(e.target.value))} placeholder='Rating' className='border w-3/4 h-10 p-2' required />
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
                            <div className="flex justify-between">
                                <label>Thumbnail:</label>
                                <input type="file" accept="image/*" onChange={handleThumbnailChange} required />
                                {/* {image && <img src={URL.createObjectURL(image)} alt="Selected" />} */}
                            </div>
                            <div className="flex justify-between">
                                <label>Upload images:</label>
                                <input type="file" accept="image/*" multiple onChange={handleImagesChange} required />
                            </div>


                        </div>
                        <button onClick={AddProduct} className="bg-green-500 w-96 mt-2 text-sm p-1">Add Product</button>

                    </div>
                </div>
            </form>
        </>
    );
}

export default AddProduct;