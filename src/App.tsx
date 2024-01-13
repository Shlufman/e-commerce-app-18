import React, { useEffect, useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import {Layout} from "@components";
import { CartPage, BlogPage, CheckoutPage, ErrorPage, RegisterPage, SinglePostPage,
  LoginPage, LandingPage, ProductPage, ProductsPage, ProfilePage, RestorePage, TextPage,
} from "pages";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="restore" element={<RestorePage />} />
          <Route path="post" element={<SinglePostPage />} />
          <Route path="text" element={<TextPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
