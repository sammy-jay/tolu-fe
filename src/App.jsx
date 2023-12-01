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
    baseUrl = "http://localhost:3000";
  } else {
    baseUrl = "https://itrack-server-2.vercel.app";
  }

  // const socket = io(baseUrl)

  // useEffect(()=> {
  //   socket.on("message", (data)=> {
  //     // console.log(data.dueArr)
  //     // alert(JSON.stringify(data.message))
  //     console.log(data)
  //     if (data.dueArr !== "") {
  //       // alert(`due: ${JSON.stringify(due)}`)
  //       // alert(`msg: ${JSON.stringify(data.message)}`)
  //       if (due === data.message) {
  //         alert("same")
  //       } else {
  //         // alert(data.message[0].customer)
  //         setDue(data.message)
  //       }
  //       // setDue(data.message)
        
  //       // alert(typeof(data.message))
  //       // alert(data.message.length)
  //       // alert("k")
  //       // alert(JSON.stringify(data.message))
  //     } else {
  //       setDue("")
  //     }
      
  //   })
  // }, [])

 
  let email
    let currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      currentUser = JSON.parse(currentUser)
      email = currentUser.email
    } else {
      email = ""
      console.log("No Emit Connection")
    }


  // setInterval(()=> {
  //   socket.emit("checkDues", {email})
  // },60000)
 

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
