import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
