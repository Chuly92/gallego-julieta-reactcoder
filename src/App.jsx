import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Categories } from "./components/Categories";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>

          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />

          <Route path="/item/:id" element={<ItemDetailContainer/>} />

          <Route path="/*" element={<h2 style={{textAlign: 'center'}}>Error 404 - Invalid URL</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
