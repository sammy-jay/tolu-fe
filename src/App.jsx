import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import SignUp from "./pages/SignUp";

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import UserHome from "./pages/UserHome";
import io from 'socket.io-client'
import MakePayment from './pages/MakePayment';
let dotEnv = import.meta.env;



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
      <Route path="/log-in" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/new-user" element={<NewUser userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/user/home" element={<UserHome />} />
      <Route path="/itrack-pay" element={<MakePayment />} />
    </Routes>
  )
}

export default App
