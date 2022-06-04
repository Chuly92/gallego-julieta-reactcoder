import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Categories } from "./components/categories/Categories";
import { NotFound } from "./components/extras/NotFound";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { ItemListContainer } from "./components/items/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Checkout } from "./components/shopping/Checkout";
import { Account } from "./components/user/Account";
import { Logout } from "./components/user/Logout";
import { Orders } from "./components/user/Orders";
import { ContextCart } from "./contexts/ContextCart";
import { theme } from "./styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextCart>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/gallego-julieta-reactcoder" element={<ItemListContainer />} />
              
              <Route path="/item/:id" element={<ItemDetailContainer />} />

              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id" element={<ItemListContainer />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/logout" element={<Logout />} />


              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ContextCart>
      </ThemeProvider>
    </>
  );
}

export default App;
