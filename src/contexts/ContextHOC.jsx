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
          const itemFounded = { ...obj, qtyItem: item.qtyItem + obj.qtyItem };

          if(itemFounded.qtyItem > item.data.stock){
            alert("Maximum stock reached");
          }
          else{
            alert("added");
            return { ...obj, qtyItem: item.qtyItem + obj.qtyItem };
          }
        }
        return obj;
      });

      setCart(newCart);

    } else {
      setCart([...cart, item]);
      // setShowItemCount(false);
    }
  };

  const removeItem = (item) => {
    if (isInCart(item)) {
      setIsRemoveItem(true);
      const filteredCart = cart.filter((e) => e.data.id !== item.data.id);

      saveStoragedCart(cart);
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
      saveStoragedCart(cart);

    } else {
      //Check localStorage / If I'm deleting all the cart
      if (!isRemoveItem) {
        const sessionCart = loadStoragedCart();
        !sessionCart || setCart(sessionCart);
      } else {
        localStorage.clear();
        setQtyItemsCart(0);
        
      }
    }
  }, [cart, isRemoveItem]);

  const loadStoragedCart = () => {
    let savedCart = JSON.parse(localStorage.getItem("savedCart"));
    return savedCart;
  };

  const saveStoragedCart = (cart) => {
    localStorage.setItem("savedCart", JSON.stringify(cart));
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
