import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
    return (
        <div className={styles.HomeBanner}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ fontSize: "40px", color: "white", fontWeight: "600" }}>Summer Sale!</h1>
                <p>Enjoy discount on every item</p>
                <h1 style={{ fontSize: "40px", color: "yellow", fontWeight: "600" }}>GET 50% OFF</h1>
            </div>

            <div>
                <img src="/banner-image.png"
                    width={300}
                    height={300}
                    alt="Banner image" />
            </div>

        </div>
    );
}

export default HomeBanner;