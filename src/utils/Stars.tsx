import { IoMdStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

// interface User {
//     id: string;
//     name: string;
//     email: string;
//     emailVerified: null | boolean;
//     image: string;
//     hashedPassword: null | string;
//     createdAt: string;
//     updatedAt: string;
//     role: string;
// }

interface Review {
    // id: string;
    // userId: string;
    // productId: string;
    rating: number;
    // comment: string;
    // createdDate: string;
    //user: User;
}

const Stars = ({ rating }: { rating: number }) => {
    //console.log(Array.isArray(reviews));

    // let sum: number = 0;
    // reviews.forEach((review) => {
    //     sum += review?.rating;
    // })

    // sum /= reviews.length > 0 ? reviews.length : 0;
    let stars: JSX.Element[] = []

    //console.log("sum", sum);
    let isDeci: boolean = false;
    if (rating > Math.floor(rating)) isDeci = true;
    //sum = Math.floor(sum);
    rating = Math.floor(rating);

    while (!isNaN(rating) && rating-- > 0) {
        //console.log("hii");
        stars.push(<IoMdStar key={rating} />)
    }
    if (isDeci) stars.push(<FaStarHalf key={rating} />)

    let remain: number = 5 - stars.length;

    while (remain-- > 0) {
        stars.push(<IoIosStarOutline key={`${Math.random()}_star`} />)
    }

    return <>{stars}</>;
}

export default Stars;