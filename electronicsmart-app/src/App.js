import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login, SelectUser } from "./features/Reducers/UserSlice";

import "./App.css";
import SignUp from "./Components/Header/Signup";
import Product from "./Components/Products/Product";
import Checkout from "./Components/Checkout/Checkout";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body_Home/Body";
import Mobile1 from "./Components/Mobile1/Mobile1";
import Desktop from "./Components/Desktop/Desktop";
import TV from "./Components/TV/TV";
import AirConditioners from "./Components/AirConditioners/AirConditioners";
import Wishlist from "./Components/Cart/Wishlist";
import LoginModel from "./Components/Header/LoginModel";
import Error404 from "./Components/Error404";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import Dashboard from "./Components/Admin/pages/index";
// import Account from "./Components/Admin/pages/account";

// import Customer from "./Components/Admin/pages/customers";
// import Login from "./Components/Admin/pages/login";
// import Products from "./Components/Admin/pages/products";
// import Register from "./Components/Admin/pages/register";
// import Settings from "./Components/Admin/pages/settings";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(SelectUser);
 
useEffect(() => {
    if(localStorage.getItem('token') && localStorage.getItem('id')){
      
      if(!user)
      {
          axios.get(`https://electronics-app.herokuapp.com/user?_id=${localStorage.getItem('id')}`, {
            headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }).then((res)=>{
            dispatch(login(res.data))
          })
      }
    }
}, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />

          {/* <Route path="/" element={<Footer />} /> */}
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Body className="bdy" />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginModel />} />

          <Route path="/product/:id" element={<Product />} />

          <Route exact path="/checkout" element={<Checkout />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/product/cart" element={<Cart />} />
          <Route path="/Mobile1" element={<Mobile1 />} />
          <Route path="/Desktop" element={<Desktop />} />
          <Route path="/TV" element={<TV />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/account" element={<Account />} />

          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/Settings" element={<Settings />} /> */}

          <Route path="/AirConditioners" element={<AirConditioners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
