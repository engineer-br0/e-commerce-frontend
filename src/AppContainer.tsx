import App from "./App"
import ContextWrapper from "./context/Context";

const AppContainer: React.FC = () => {
    return (
        <>
            <ContextWrapper>
                <App />
            </ContextWrapper>
        </>
    );
}

export default AppContainer;