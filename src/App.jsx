import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import SignUp from "./pages/SignUp";
import MakePayment from "./pages/MakePayment";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import UserHome from "./pages/UserHome";

function App() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    country: "",
    state: "",
    address: "",
    currency: "",
    businessPhone: "",
    businessEmail: ""
  })

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/make-payment" element={<MakePayment />} />
      <Route path="/log-in" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/new-user" element={<NewUser userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/user/home" element={<UserHome />} />
      
    </Routes>
  )
}

export default App
