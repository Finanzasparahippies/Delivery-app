"use client";

import { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  addOrderToCart: () => {},
  removeFromCart: () => {},
});


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde localStorage al inicio
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedCart);
    } catch (error) {
      console.error("Error parsing cart items from localStorage", error);
      setCartItems([]);
    }
  }, []);

  // Guardar carrito en localStorage cuando se actualice
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // Agregar
  console.log("producto", product); 
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const addOrderToCart = (order) => {
    // Agregar un pedido completo al carrito
    console.log("Adding order to cart", order);
    order.forEach((product) => {
      console.log("Adding product to cart", product);
      addToCart(product);
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, addOrderToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
