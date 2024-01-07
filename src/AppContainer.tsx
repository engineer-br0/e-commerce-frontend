import App from "./App"
import ContextWrapper from "./context/Context";
import SellerContextWrapper, { SellerContext } from "./context/SellerContext";

const AppContainer: React.FC = () => {
    return (
        <>
            <ContextWrapper>
                <SellerContextWrapper>
                    <App />
                </SellerContextWrapper>

            </ContextWrapper>
        </>
    );
}

export default AppContainer;