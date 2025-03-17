import React from "react";
import "./App.css";
import Home from "./Components/Home.js";
import Cart from "./Components/Cart.js";
import History from "./Components/History.js";
import Login from "./Components/Login.js";
import Logout from "./Components/Logout.js";
import Order from "./Components/Order.js";
import Payment from "./Components/Payment.js";
import Products from "./Components/Products.js";
import Profile from "./Components/Profile.js";
import Register from "./Components/Register.js";
import Search from "./Components/Search.js";
import Track from "./Components/Track.js";
import About from "./Components/About.js";
import User from "./Components/User.js";
import ResponsiveAppBar from "./Components/ResponsiveAppBar.js";
import API_Products from "./Components/API_Products.js";
import Logo from "./Components/Logo.js";
import UserManagement from "./Components/UserManagement.js";
import Video from "./Components/Video.js";
import Doc from "./Components/Doc.js";
import Doc2 from "./Components/Doc2.js";
import CustomerList from "./Components/CustomerList.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <ResponsiveAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/track" element={<Track />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/api_products" element={<API_Products />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/video" element={<Video/>} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/doc2" element={<Doc2 />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
