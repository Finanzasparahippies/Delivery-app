"use client";

import { useEffect, useState } from "react";
import MenuItem from "@components/menu/MenuItem";
import API from "../../utils/API";

const MenuGrid = ({ columns, categoria }) => {
  var columnsClass = '';
  
  switch (columns) {
    case 3:
      columnsClass = 'col-lg-4';
      break;
    case 2:
      columnsClass = 'col-lg-6';
      break;
    default:
      columnsClass = 'col-lg-3';
  }

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    API.get('/products/product')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);


  return (
    <>
      {categoria === "Tortas" ? (
        <div className="row">
          {menuItems?.Tortas?.map((item, key) => (
          <div className={columnsClass} key={`menu-grid-item-${key}`}>
            <MenuItem item={item} index={key} marginBottom={30} categoria={categoria} />
          </div>
          ))}
        </div>
      ) : (
        categoria === "Quekas" ? (
          <div className="row">
            {menuItems?.Quekas?.map((item, key) => (
            <div className={columnsClass} key={`menu-grid-item-${key}`}>
              <MenuItem item={item} index={key} marginBottom={30} categoria={categoria} />
            </div>
            ))}
          </div>
        ) : (
          categoria === "Papas" ? (
            <div className="row">
              {menuItems?.Papas?.map((item, key) => (
              <div className={columnsClass} key={`menu-grid-item-${key}`}>
                <MenuItem item={item} index={key} marginBottom={30} categoria={categoria} />
              </div>
              ))}
            </div>
          ) : (
              <div className="row">
                {menuItems?.Bebidas?.map((item, key) => (
                <div className={columnsClass} key={`menu-grid-item-${key}`}>
                  <MenuItem item={item} index={key} marginBottom={30} categoria={categoria} />
                </div>
                ))}
              </div>
          )
        )
      )}
    </>
  );
};
export default MenuGrid;
  