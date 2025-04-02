import { useEffect } from "react";

export const useClickOutside = (ref, setShowProduct) => {

    useEffect(() => {

        const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowProduct(false);
        }
        };

        if (setShowProduct) {
        document.addEventListener("click", handleClickOutside);
        // document.body.classList.add('no-scroll');
        } else {
        document.removeEventListener("click", handleClickOutside);
        document.body.classList.remove('no-scroll');
        }

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, [setShowProduct]);

};
