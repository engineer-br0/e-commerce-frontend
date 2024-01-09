import { ReactElement, ReactNode, createContext, useEffect, useState } from "react";

export interface sellerInterface {
    name?: string;
    email?: string;
    gstNumber?: string;
    address?: string;
    sellerToken?: string;
    mobile?: string,
    products?: { [key: string]: any }[],
    setSellerToken?(token: string): void;
}

export interface ContextItems {
    sellerLogin: boolean;
    setSellerLogin(value: boolean): void;
    sellerDetails: sellerInterface;
    setSellerDetails: (arg: sellerInterface) => void;
}

export const SellerContext = createContext<ContextItems | undefined>(undefined);

const SellerContextWrapper: React.FC<{ children: ReactElement }> = ({ children }: { children: ReactElement }) => {
    const [sellerLogin, setSellerLogin] = useState<boolean>(false);
    const [sellerDetails, setSellerDetails] = useState<sellerInterface>({});

    const getToken = () => {
        //console.log(document.cookie);
        const cookieArray = (document.cookie).split(';');
        //console.log(cookieArray);

        const token = cookieArray.find(cookie => {
            const cookieItems = cookie.split('=');
            return cookieItems[0].trim() === "sellerToken";
        });

        const tokenValue = token?.split("=")[1];
        /// its a wrong way...
        //////console.log({ ...sellerDetails, sellerToken: tokenValue, sellerToken: tokenValue, sellerToken: tokenValue });
        // const newSeller = sellerDetails;
        // newSeller.sellerToken = tokenValue;
        // setSellerDetails(newSeller);
        setSellerDetails(prevSellerDetails => ({
            ...prevSellerDetails,
            sellerToken: tokenValue
        }));
    }

    const fetchSeller = async () => {
        //console.log("inside fetch seller");
        //console.log(document.cookie);

        if (sellerDetails.sellerToken) {
            //console.log("inside if");

            try {
                const response = await fetch("http://localhost:4000/seller/details/getSellerDetails", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sellerDetails.sellerToken}`
                    }
                })
                const res = await response.json();
                //console.log(res);
                setSellerDetails(prev => ({ ...prev, ...res }));
            }
            catch (er) {
                //console.log(er);
            }
        }
    }

    useEffect(() => {
        getToken();
    }, [sellerLogin])

    useEffect(() => {
        fetchSeller();
        //console.log(sellerDetails);
    }, [sellerLogin, sellerDetails.sellerToken]);

    useEffect(() => {
        //console.log(sellerDetails);
    }, [sellerDetails]);


    return (
        <SellerContext.Provider value={{ sellerLogin, setSellerLogin, sellerDetails, setSellerDetails }}>
            {children}
        </SellerContext.Provider>
    )

}

export default SellerContextWrapper;