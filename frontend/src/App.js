import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom';  // Updated for React 17
import AuthContext from "./context/AuthContext";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import History from "./Components/History";
import Logout from "./Components/Logout";
import Order from "./Components/Order";
import Payment from "./Components/Payment";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Track from "./Components/Track";
import About from "./Components/About";
import User from "./Components/User";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import API_Products from "./Components/API_Products";
import Logo from "./Components/Logo";
import UserManagement from "./Components/UserManagement";
import Video from "./Components/Video";
import Doc from "./Components/Doc";
import Doc2 from "./Components/Doc2";
import CustomerList from "./Components/CustomerList";
import FeedbackForm from "./Components/FeedbackForm";
import JWTLogin from "./Components/JWTLogin";
import JWTRegister from "./Components/JWTRegister";
import AdminDashboard from "./Components/AdminDashboard";
import ProductDashboard from "./Components/ProductDashboard";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart userId={user?.id} />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<JWTLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/register" element={<JWTRegister />} />
          <Route path="/search" element={<Search />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/track" element={<Track />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/api_products" element={<API_Products />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/doc2" element={<Doc2 />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/product-dashboard" element={<ProtectedRoute role="user"><ProductDashboard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
