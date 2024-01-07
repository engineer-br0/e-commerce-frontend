import { ReactElement, ReactNode, createContext, useState } from "react";

interface ContextItems {
    sellerLogin: boolean;
}

export const SellerContext = createContext<ContextItems>({ sellerLogin: false });

const SellerContextWrapper: React.FC<{ children: ReactElement }> = ({ children }: { children: ReactElement }) => {
    const [sellerLogin, setSellerLogin] = useState<boolean>(false);

    return (
        <SellerContext.Provider value={{ sellerLogin }}>
            {children}
        </SellerContext.Provider>
    )

}

export default SellerContextWrapper;