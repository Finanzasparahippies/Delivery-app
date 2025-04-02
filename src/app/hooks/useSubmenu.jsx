
import { useState } from 'react';


const useSubMenu = () => {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    
    const handleSubMenuClick = (index, e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        setOpenSubMenu(prev => (prev === index ? false : index));
      }
    };
  
    return { openSubMenu, handleSubMenuClick };
  };

export default useSubMenu;