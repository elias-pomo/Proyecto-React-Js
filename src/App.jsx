import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router";
import Catalogo from "./components/pages/catalogo/Catalogo";
import CartContextProvider from "./context/CartContext";


function App() {

  return(
    <div>
    <BrowserRouter>
    <CartContextProvider>
    <Navbar />
    <Routes> 
      <Route path="/*" element={<h1>404 page no found</h1>} />
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer />
    </CartContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
