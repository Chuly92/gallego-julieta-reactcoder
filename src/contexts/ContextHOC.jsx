import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext(undefined);

export const ContextHOC = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [qtyItemsCart, setQtyItemsCart] = useState(0);

  let savedCart = sessionStorage.getItem('savedCart');

  const addItem = (item) => {
    if (isInCart(item)) {
      const newCart = cart.map((obj) => {
        if (obj.data.id === item.data.id) {
          return { ...obj, qtyItem: item.qtyItem + obj.qtyItem };
        }
        return obj;
      });

      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (item) => {
    if (isInCart) {
      const filteredCart = cart.filter((e) => e.data.id !== item.data.id);
      setCart([filteredCart]);
    }
  };

  const isInCart = (item) => {
    const isInCart = cart.some((i) => i.data.id === item.data.id);
    return isInCart;
  };

  const clear = () => {
    setCart([]);
  };

  useEffect(() => {
    
    if (cart.length !== 0) {
      // saveSessionCart();

      let totalItems = 0;
      const sumItems = cart.map((item) => {
        totalItems += item.qtyItem;
      });
      setQtyItemsCart(totalItems);
    }
  }, [cart]);
  
  // const saveSessionCart = () => { 
  //   sessionStorage.setItem('savedCart', JSON.stringify(cart));
  //  };

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addItem,
          removeItem,
          clear,
          qtyItemsCart,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};
