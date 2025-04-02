"use client";

import { useState, useEffect } from "react";
import { set } from "date-fns";
import ProductPopup from "./ProductPopup";




const MenuItem = ({ item, noImage, marginBottom, categoria }) => {
    
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState([]);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <>    
      <a data-fancybox="menu" data-no-swup href={item.image} className={`sb-menu-item sb-mb-${marginBottom}`} onClick={ (e) => { e.preventDefault(); setImg(true); setImgValue( [{ "src": item.image, "alt": item.title }] ); setShowProduct(true) }}>
        {noImage != 1 &&
        <div className="sb-cover-frame">
          <img src={item.image} alt={item.name}/>
          <div dangerouslySetInnerHTML={{__html : item.badge}}/>
        </div>
        }
        <div className="sb-card-tp" >
            <h4 className="sb-card-title">{item.name}</h4>
            <div className="sb-price"><sub>$</sub> {item.price}</div>
        </div>
        <div className="sb-description">
            <h2 style={{ 
                fontSize: "1.2rem", 
                fontWeight: "bold", 
                padding: 16 
              }}
            >
                Ingredientes:
            </h2>
            <p className="sb-text sb-mb-15">
                {item.ingredients?.map((ingredient, key) => (
              <span key={key}>
                {ingredient.ingredient}
                {key < item.ingredients.length - 1 ? ', ' : ''}
              </span>
            ))}
            </p>
        </div>
      </a>
      {showProduct && (
        <ProductPopup item={ item } showProduct={showProduct} setShowProduct={ setShowProduct } categoria={ categoria }/>
      )}
    </>
  );
};
export default MenuItem;
