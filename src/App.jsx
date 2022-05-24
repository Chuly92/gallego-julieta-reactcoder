import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Categories } from "./components/Categories";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Cart } from "./components/Cart";
import { ContextHOC } from "./contexts/ContextHOC";

function App() {
  return (
    <>
    <ContextHOC>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />

          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />

          <Route path="/cart" element={<Cart/>} />

          <Route path="/*" element={<h2 style={{textAlign: 'center'}}>Error 404 - Invalid URL</h2>} />
        </Routes>
      </BrowserRouter>
      </ContextHOC>
    </>
  );
}

export default App;
