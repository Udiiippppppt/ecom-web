import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Productitems from "./components/Productitems";
import Login from './components/Login';
import Cart from "./components/Cart";
import Profile from './components/Profile';
import Footer from "./components/Footer";  
import Thought from "./components/Thought";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";


const App = () => {
  const [FinalCategory, setFinalCategory] = useState([]);
  const [FinalProduct, setFinalProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((FinalRes) => {
        setFinalCategory(FinalRes);
      });
  };

  const getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((InitialRes) => {
        setFinalProduct(InitialRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const Pitems = FinalProduct.map((products, index) => {
    return <Productitems key={index} pdata={products} addToCart={addToCart} />;
  });

  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== '/login' && (
        <header className="py-2">
          <div className="container">
            <Navbar />
          </div>
        </header>
      )}
      <main className="flex-grow max-w-[1920px] mx-auto">
        <Routes>
          <Route 
            path="/login" 
            element={<Login onLogin={() => setIsAuthenticated(true)} />} 
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">Our Products</h1>
                  <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-5 md:gap-8">
                    <Category FinalCategory={FinalCategory} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {Pitems}
                    </div>
                  </div>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/AboutUs" element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/service" element={isAuthenticated ? <Service /> : <Navigate to="/login" />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && (
        <div className="mt-20 w-full">
          <div className="mb-20 w-full">
            <Thought />
          </div>
          <div className="mb-20 w-full">
            <Service />
          </div>
          <Footer />
          
        </div>
      )}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
