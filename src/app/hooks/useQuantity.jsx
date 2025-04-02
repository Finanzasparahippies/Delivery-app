import { useState } from 'react';

export const useQuantity = ( initialValue = 0 ) => {
    const [quantity, setQuantity] = useState(initialValue);
    
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };
    
    const decreaseQuantity = () => {
        setQuantity(prev => Math.max(prev - 1, 0));
    };

    const updateQuantity = (item, added) => {
        setQuantity(prev => prev + added);
    }

    
    return {
        quantity,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
    };
    }

export const useExtrasQuantity = (initialExtras = 0) => {
    const [extraQuantity, setExtraQuantity] = useState({});

    const increaseExtraQuantity = (extraId) => {
        setExtraQuantity((prev) => ({
            ...prev,
            [extraId]: (prev[extraId] || 0) + 1,
        }));
        };

    const decreaseExtraQuantity = (extraId) => {
        setExtraQuantity((prevExtraQuantity) => ({
            ...prevExtraQuantity,
            [extraId]: Math.max((prevExtraQuantity[extraId] || 0) - 1, 0),
        }));
        };

        return { extraQuantity, increaseExtraQuantity, decreaseExtraQuantity };
    };