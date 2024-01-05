import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
    return (
        <div className={styles.HomeBanner}>
            <div className={styles.textContainer} style={{ display: "flex", flexDirection: "column" }}>
                <h1 className={styles.title} style={{ color: "white", fontWeight: "600" }}>Summer Sale!</h1>
                <p className={styles.subtitle}>Enjoy discount on every item</p>
                <h1 className={styles.discount} style={{ color: "yellow", fontWeight: "600" }}>GET 50% OFF</h1>
            </div>

            <div className={styles.imageContainer}>
                <img src="/yash.jpeg"
                    className={styles.bannerImage}
                    width={300}
                    height={300}
                    alt="Banner image" />
            </div>

        </div>
    );
}

export default HomeBanner;