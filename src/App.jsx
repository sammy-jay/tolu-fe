import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import SignUp from "./pages/SignUp";

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import UserHome from "./pages/UserHome";
import GeneratePLink from './pages/GeneratePLink';
let dotEnv = import.meta.env




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
  const [due, setDue] = useState([])

  // alert(dotEnv.MODE)

  let baseUrl;
  if (dotEnv.MODE === "development") {
    baseUrl = "http://localhost:3000";
  } else {
    baseUrl = "https://itrack-server.vercel.app";
  }

  async function sendEmit() {
    try {
      let url = baseUrl + "/itrack/emit"
      let response = await fetch(url)
      let data = await response.json()
      setDue(data.message)
      // alert(data.message)
    } catch(error) {
      console.log(error)
    }
  }

  setInterval(()=> {
    sendEmit()
  },60000)
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/new-user" element={<NewUser userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/user/home" element={<UserHome setDue={setDue} due={due} />} />
      <Route path="/generate-link" element={<GeneratePLink />} />
    </Routes>
  )
}

export default App
