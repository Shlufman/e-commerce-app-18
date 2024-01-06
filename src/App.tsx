import React, { useEffect, useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Main from "./ui/components/main/Main";

import {Layout} from "@components";
import { CartPage, BlogPage, CheckoutPage, ErrorPage, RegisterPage, SinglePostPage,
  LoginPage, LandingPage, ProductPage, ProductsPage, ProfilePage, RestorePage, TextPage,
} from "@pages";

import TCMenuItem from "@components/menu/domain/model/TCMenuItem";
import { MenuFactory } from "@components/menu/utils/MenuFactory";


import {
  // menuItems,
  // tempMenuItems,
  TypeMenuItemDTO, getMenuJSONData,
} from "./api";



function App() {
  const [subMenuItems, setSubMenuItems] = useState<Array<TCMenuItem>>([]);


  useEffect(() => {
    // const mapperToArray = new MenuArrayCreate(menuItems);
    // console.log(mapperToArray.getArray());
    // const ar = mapperToArray.getArray();

    // const mapperToObject = new MenuObjectCreate(ar);
    // console.log(mapperToObject.getObject());

    getMenuJSONData().then(data => {
      const creater = new MenuFactory(data);
      // let res: TypeMenuItemDTO = {...menuItems};
      let res = creater.getMenuItem();
      // let res= mapperToObject.getObject();
      console.log("res", res);

      setSubMenuItems((prev) => {
        const array = [...prev];
        array.push(res!);
        console.log("array", array);
        return array;
      });
    })

  }, []);

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

      <Main />
    </div>
  );
}

export default App;
