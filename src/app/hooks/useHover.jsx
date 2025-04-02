import { useState, useEffect, useRef } from 'react';

const useHover = () => {

    const [hovered, setHovered] = useState(false);

    const hoverTimeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeoutRef.current);
        setHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
        setHovered(false);
        }, 200);
    };

    useEffect(() => {
        return () => {
            clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    return { hovered, handleMouseEnter, handleMouseLeave };
  };

export default useHover;