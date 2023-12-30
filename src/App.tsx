import React from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Main from "./module/ecommerce/presentation/components/main/Main";

import Layout from "./module/ecommerce/presentation/components/layout/presentation/Layout";
import CartPage from "./module/ecommerce/presentation/pages/cart-page/presentation/CartPage";
import BlogPage from "./module/ecommerce/presentation/pages/blog-page/presentation/BlogPage";
import CheckoutPage from "./module/ecommerce/presentation/pages/checkout-page/presentation/CheckoutPage";
import ErrorPage from "./module/ecommerce/presentation/pages/error-page/presentation/ErrorPage";
import LandingPage from "./module/ecommerce/presentation/pages/landing-page/presentation/LandingPage";
import LoginPage from "./module/ecommerce/presentation/pages/login-page/presentation/LoginPage";
import ProductPage from "./module/ecommerce/presentation/pages/product-page/presentation/ProductPage";
import ProductsPage from "./module/ecommerce/presentation/pages/products-page/presentation/ProductsPage";
import ProfilePage from "./module/ecommerce/presentation/pages/profile-page/presentation/ProfilePage";
import RegisterPage from "./module/ecommerce/presentation/pages/register-page/presentation/RegisterPage";
import RestorePage from "./module/ecommerce/presentation/pages/restore-page/presentation/RestorePage";
import SinglePostPage from "./module/ecommerce/presentation/pages/single-post-page/presentation/SinglePostPage";
import TextPage from "./module/ecommerce/presentation/pages/text-page/presentation/TextPage";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage/>}/>
          <Route path="blog" element={<BlogPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="landing" element={<LandingPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="product" element={<ProductPage/>}/>
          <Route path="products" element={<ProductsPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="restore" element={<RestorePage/>}/>
          <Route path="post" element={<SinglePostPage/>}/>
          <Route path="text" element={<TextPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>

      <Main />
    </div>
  );
}

export default App;
