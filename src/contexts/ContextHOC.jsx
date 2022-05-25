import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext(undefined);

export const ContextHOC = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qtyItemsCart, setQtyItemsCart] = useState(0);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [isRemoveItem, setIsRemoveItem] = useState(false);

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
    if (isInCart(item)) {
      setIsRemoveItem(true);
      const filteredCart = cart.filter((e) => e.data.id !== item.data.id);

      saveSessionCart(cart);
      setCart(filteredCart);
      return filteredCart;
    } else {
      alert("Some error has occured by deleting the item. Please try again");
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
    if (cart.length > 0) {
      let totalItems = 0;
      let totalPriceItems = 0;

      const sumItems = cart.map((item) => {
        totalItems += item.qtyItem;
        totalPriceItems += item.data.price * item.qtyItem;
      });

      setQtyItemsCart(totalItems);
      setTotalPriceCart(totalPriceItems);
      saveSessionCart(cart);
    } else {
      //Check sessionStorage / If I'm deleting all the cart
      if (!isRemoveItem) {
        const sessionCart = loadSessionCart();
        !sessionCart || setCart(sessionCart);
      }
    }
  }, [cart]);

  const loadSessionCart = () => {
    let savedCart = JSON.parse(sessionStorage.getItem("savedCart"));
    return savedCart;
  };

  const saveSessionCart = (cart) => {
    sessionStorage.setItem("savedCart", JSON.stringify(cart));
  };

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addItem,
          removeItem,
          clear,
          qtyItemsCart,
          totalPriceCart,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};
