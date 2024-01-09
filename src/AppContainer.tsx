import App from "./App"
import CarouselWrapper from "./context/CarouselContext";
import ContextWrapper from "./context/Context";
import SellerContextWrapper, { SellerContext } from "./context/SellerContext";

const AppContainer: React.FC = () => {
    return (
        <>
            <ContextWrapper>
                <SellerContextWrapper>
                    <CarouselWrapper>
                        <App />
                    </CarouselWrapper>
                </SellerContextWrapper>

            </ContextWrapper>
        </>
    );
}

export default AppContainer;