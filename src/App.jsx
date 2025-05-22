import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import CartItems from "./pages/CartItems";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Category />
      <CartItems />
    </div>
  );
}

export default App;
