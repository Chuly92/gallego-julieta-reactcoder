import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Categories } from "./components/Categories";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Cart } from "./components/Cart";
import {Checkout} from "./components/Checkout";
import { ContextCart } from "./contexts/ContextCart";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
    <ContextCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />

          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />

          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </ContextCart>
    </>
  );
}

export default App;
