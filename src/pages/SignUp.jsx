import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

function SignUp() {
  const [signUp, setSignUp] = useState(true);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    password: ""
  });
  const [showPassword, setShowPasword] = useState(false)
  const navigate = useNavigate()

  function handleInputChange(e) {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    // alert(JSON.stringify(userDetails))
    try{
        let response = fetch("http://localhost:3000/itrack/sign-up", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(userDetails)
        })
        if (response.status === 200) {
            navigate("/")
        }
    } catch(error) {
        console.log(error)
    }
   
  }

  return (
    <div>
      <SideBar />
      {signUp ? (
        <div className="bg-gradient-to-bl from-white to-red-50 h-full w-full fixed top-0 left-0 flex pt-[10vh] justify-center">
          <div className="bg-blue-40 w-[80%] h-10">
            <div className="w-10 h-10 rounded-lg bg-red-400 mx-auto"></div>
            <form onSubmit={handleFormSubmit} className="w-[80%] mx-auto space-y-3">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  onChange={handleInputChange}
                  value={userDetails.firstName}
                  className="border border-orange-300 rounded-md w-full p-1"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  onChange={handleInputChange}
                  value={userDetails.lastName}
                  className="border border-orange-300 rounded-md w-full p-1"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleInputChange}
                  value={userDetails.email}
                  className="border border-orange-300 rounded-md w-full p-1"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  maxLength={11}
                  onChange={handleInputChange}
                  value={userDetails.phone}
                  className="border border-orange-300 rounded-md w-full p-1"
                />
              </div>
              <div>
                <label htmlFor="businessName">Business Name</label>
                <input
                  name="businessName"
                  id="businessName"
                  type="text"
                  onChange={handleInputChange}
                  value={userDetails.businessName}
                  className="border border-orange-300 rounded-md w-full p-1"
                />
              </div>
              { !showPassword ? 
              <div className="relative">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleInputChange}
                  value={userDetails.password}
                  className="border border-orange-300 rounded-md w-full p-1"    
                />
                <div className="absolute text-orange-500 right-3 top-8 text-sm font-medium"><button onClick={()=>setShowPasword(!showPassword)}>SHOW</button></div>
              </div> : 
               <div className="relative">
               <label htmlFor="password">Password</label>
               <input
                 name="password"
                 id="password"
                 type="text"
                 onChange={handleInputChange}
                 value={userDetails.password}
                 className="border border-orange-300 rounded-md w-full p-1"    
               />
               <div className="absolute text-orange-500 right-3 top-8 text-sm font-medium"><button onClick={()=>setShowPasword(!showPassword)}>HIDE</button></div>
             </div> }
            

              <div className="w-2/3 mx-auto">
                <button type="submit" className=" p-2 bg-orange-400 w-full rounded-lg">
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SignUp;
