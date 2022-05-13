import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ greetings }) => {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>{greetings}</h3>
      <ItemCount stock={5} initial={1}/>
    </>
  );
};
