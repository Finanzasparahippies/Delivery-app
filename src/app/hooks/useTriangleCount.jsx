import { useState, useEffect } from 'react';

const useTriangleCount = (ulRef, triangleSize) => {
    const [triangleCount, setTriangleCount] = useState(0);

    useEffect(() => {
      const calculateTriangles = () => {
        if (ulRef.current) {
          const ulWidth = ulRef.current.offsetWidth;
          setTriangleCount(Math.floor(ulWidth / triangleSize));
        }
      };

      calculateTriangles();
      window.addEventListener('resize', calculateTriangles);

      return () => {
        window.removeEventListener('resize', calculateTriangles);
      };
    }, [ulRef, triangleSize]);
  
    return triangleCount;
  };

export default useTriangleCount;