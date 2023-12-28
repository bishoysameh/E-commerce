import { useState, useContext, createContext, useEffect } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartProduct(JSON.parse(storedCart));
    }
  }, []);
  const updateCart = (newCart) => {
    setCartProduct(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <CartContext.Provider value={[cartProduct, setCartProduct]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
