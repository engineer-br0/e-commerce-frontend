import { useEffect, useState } from "react";
import { createContext } from "react";

export interface carouselInterface {
    currentIndex: number;
    images: string[];
}

export const CarouselContext = createContext<carouselInterface>({ currentIndex: 0, images: [] });

const CarouselWrapper = ({ children }: { children: React.ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const images = ["/poster1.png", "/poster2.png", "poster3.png"];



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((oldIndex) => (oldIndex + 1) % images.length);
            console.log("hi", currentIndex);
        }, 3000)

        // Code to run when the component is unmounted or when dependencies change
        return () => clearInterval(interval);
    }, [])

    return (
        <CarouselContext.Provider value={{ currentIndex, images }}>
            {children}
        </CarouselContext.Provider>
    )
}

export default CarouselWrapper;