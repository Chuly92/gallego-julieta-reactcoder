import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Hi dear! This is the product list that you can buy"}/>}/>
          <Route path="/item/all" element={<ItemListContainer greetings={"Hi dear! This is the product list that you can buy"}/>}/>
          <Route path="/category/:id" element={<ItemListContainer greetings={"Products by Category"}/>} />

          <Route path="/item/:id" element={<ItemDetailContainer/>} />

          <Route path="/*" element={<h2 style={{textAlign: 'center'}}>Error 404 - Invalid URL</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
