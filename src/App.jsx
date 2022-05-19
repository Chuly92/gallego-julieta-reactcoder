//@ts-check
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Hi dear! Welcome to my website"}/>}/>

          <Route path="/item/" element={<ItemDetailContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />

          <Route path="/*" element={<h2 style={{textAlign: 'center'}}>Error 404 - Invalid URL</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
