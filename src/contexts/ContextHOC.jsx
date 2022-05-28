import React, { createContext, useEffect, useState } from "react";
import {Alert, Snackbar, Button, Dialog, DialogActions, DialogTitle} from '@mui/material';

export const cartContext = createContext(undefined);

export const ContextHOC = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qtyItemsCart, setQtyItemsCart] = useState(0);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [isRemoveItem, setOpenMsjSuccess] = useState(false);

  const [openMsjSuccess, setOpenAddSuccessful] = useState(false);
  const [openErrDelete, setOpenErrDelete] = useState(false);

  const handleClose = () => {
    setOpenAddSuccessful(false);
    setOpenErrDelete(false);
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      const newCart = cart.map((obj) => {
        if (obj.data.id === item.data.id) {
          const itemFounded = { ...obj, qtyItem: item.qtyItem + obj.qtyItem };

          if (itemFounded.qtyItem > item.data.stock) {
            alert("Maximum stock reached");
          } else {
            return { ...obj, qtyItem: item.qtyItem + obj.qtyItem };
          }
        }
        return obj;
      });

      setCart(newCart);
      setOpenAddSuccessful(true);
    } else {
      setCart([...cart, item]);
      setOpenAddSuccessful(true);
    }
  };

  const removeItem = (item) => {
    if (isInCart(item)) {

      const filteredCart = cart.filter((e) => e.data.id !== item.data.id);
      setCart(filteredCart);
      saveStoragedCart(cart);
      setOpenMsjSuccess(true);

    } else {
      setOpenErrDelete(true);
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

      {/* Manage alerts and errors*/}

      <Snackbar
        open={openMsjSuccess}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          sx={{ width: "100%", fontSize: 20 }}
          variant="filled"
        >
          Item added to cart!
        </Alert>
      </Snackbar>      

      <Dialog
        open={openErrDelete}
        onClose={handleClose}
        sx={{ textAlign: "center", fontSize: 20, borderRadius: 10 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"There was some error deleting the item"}
          <br />
          {"Please try again"}
        </DialogTitle>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            sx={{ display: "flex", margin: "0 auto" }}
            onClick={handleClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>


    </>
  );
};
