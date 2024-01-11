import { useEffect, useState } from "react";
import { createContext } from "react";

export interface carouselInterface {
    currentIndex: number;
    images: string[];
    setCurrentIndex: (index: number) => void;
}

export const CarouselContext = createContext<carouselInterface | undefined>(undefined);

const CarouselWrapper = ({ children }: { children: React.ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const images = ["/poster1.png", "/poster4.png", "poster3.png"];



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((oldIndex) => (oldIndex + 1) % images.length);
            console.log("hi", currentIndex);
        }, 3000)

        // Code to run when the component is unmounted or when dependencies change
        return () => clearInterval(interval);
    }, [])

    return (
        <CarouselContext.Provider value={{ currentIndex, images, setCurrentIndex }}>
            {children}
        </CarouselContext.Provider>
    )
}

export default CarouselWrapper;