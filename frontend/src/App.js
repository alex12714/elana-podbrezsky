import React from "react";
import "./App.css";
import "./styles/artworld.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ArtworkDetailPage from "./pages/ArtworkDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

function App() {
  return (
    <CartProvider>
      <div className="App font-sans">
        <Toaster position="top-center" richColors />
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/exhibitions" element={<ExhibitionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
