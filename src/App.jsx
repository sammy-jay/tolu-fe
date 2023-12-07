import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import SignUp from "./pages/SignUp";
import io from 'socket.io-client'
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
  const [due, setDue] = useState("")


  // alert(dotEnv.MODE)

  let baseUrl;
  if (dotEnv.MODE === "development") {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }


 useEffect(()=> {
  let email;
  let currentUser = localStorage.getItem("currentUser")
  if (currentUser) {
    currentUser = JSON.parse(currentUser)
    email = currentUser.email
  } else {
    email = ""
    console.log("No Emit Connection")
  }
  async function getDues() {
    let url = baseUrl + "/itrack/emit"
    let response = await fetch(url, {
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({ sellerEmail: email })
    })
    let data = await response.json()
    alert(JSON.stringify(data))
    setDue(data.message)
  }
  getDues()


 }, [])
 


 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/new-user" element={<NewUser userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/user/home" element={<UserHome due={due} setDue={setDue}  />} />
      <Route path="/generate-link" element={<GeneratePLink />} />
    </Routes>
  )
}

export default App
