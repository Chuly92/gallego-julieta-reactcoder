import React, { useContext } from "react";
import { cartContext } from "../contexts/ContextHOC";

export const Cart = () => {
  const { cart } = useContext(cartContext);

  return (
    <>
      {cart.map((e) => (
        <div key={e.data.id}>
          <h1>Cart ID: {e.data.id}</h1>
          <h1>Cart Price: {e.data.price}</h1>
          <h1>Qty Items: {e.qtyItem}</h1>
        </div>
      ))}
    </>
  );
};
