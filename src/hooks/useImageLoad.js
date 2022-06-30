import { useState } from "react";

export const useImageLoad = (src) => {
    const [isLoaded, setIsLoaded] = useState();
    const loadImage = () => {
        setIsLoaded(false);
        const img = new Image();
        function onImageLoad() {
          setIsLoaded(true);
        }

        img.src = src;
        img.addEventListener("load", onImageLoad);
    }
    
    return [loadImage, isLoaded]
}