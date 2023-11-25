import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
let dotEnv = import.meta.env;

function Login({ userDetails, setUserDetails }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [phaseTwo, setPhaseTwo] = useState(false);

  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });
  let baseUrl;
  if (dotEnv.MODE === "development") {
    baseUrl = "http://localhost:3000";
  } else {
    baseUrl = "https://itrack-server.vercel.app";
  }

  
  useEffect(() => {
    let path = window.location.href;
    if (path.includes("skip")) {
      async function createUser() {
        try {
          let url = baseUrl + "/itrack/create-user";
          // alert(url);
          let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails),
          });
          let data = await response.json();
          if (response.status === 200) {
            localStorage.setItem("currentUser", data.message);
          } else{
            alert(JSON.stringify(data))
          }
          // alert("CY");
        } catch (error) {
          console.log("error");
          // alert("Error Creating User");
          navigate("/log-in");
        }
        let newPath = path.replace("skip", "")
        window.location.href = newPath
      }
      createUser();
     
    }
  }, []);


  async function handleSubmit(param) {
    alert(param);
    if (param === "next") {
      navigate("/new-user");
    }
    if (param === "signIn") {
      try {
        let url = baseUrl + "/itrack/sign-in";
        let response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signInDetails),
        });
        let data = await response.json();
        if (response.status === 200) {
          localStorage.setItem("currentUser", JSON.stringify(data.message));
          navigate("/user/home");
        }
      } catch (error) {
        alert("EEE");
      }
    }
  }
  return (
    <div className="fixed top-0 right-0 left-0 bg-slate-50 w-full h-full">
      <div className="flex">
        <div className="w-2/3 p-10 bg-yellow-40">
          <div className="flex gap-5 items-center">
            <div>=</div>
            <p className="font-semibold text-slate-700 text-xl">
              <button onClick={() => navigate("/")}>Go back</button>{" "}
            </p>
          </div>

          <div className="my-20">
            {newUser ? (
              <div className="">
                <h1 className="font-bold text-black text-2xl">
                  Lets's get started!
                </h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit("next");
                  }}
                  className="mt-10 space-y-5"
                >
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="firstName"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        First Name
                      </label>
                      <input
                        required
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={userDetails.firstName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="lastName"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={userDetails.lastName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={userDetails.email}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <div className="absolute right-5 top-4">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPassword(!showPassword);
                          }}
                          className="text-purple-700 font-medium"
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </div>
                      </div>
                      <label
                        htmlFor="password"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Create a Password
                      </label>
                      <input
                        required
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={userDetails.password}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Password (Minimum of 8 characters)"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="my-5 flex gap-4 items-center">
                      <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                        className="w-4 h-4"
                      />
                      <p>
                        I agree to iTrack's{" "}
                        <span className="font-light text-purple-900">
                          Privacy Policy
                        </span>{" "}
                        and{" "}
                        <span className="font-light text-purple-900">
                          Terms and Conditions
                        </span>
                      </p>
                    </div>
                    <div>
                      {checked ? (
                        <button className="p-2 text-center w-full bg-purple-600 text-white text-lg rounded-lg">
                          Get Started!
                        </button>
                      ) : (
                        <button
                          className="p-2 text-center text-slate-100 w-full bg-gray-200 rounded-lg"
                          disabled
                        >
                          Get Started!
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="">
                <h1 className="font-bold text-black text-2xl">Welcome back!</h1>
                <p className="font-light text-lg">Sign in to your account</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit("signIn");
                  }}
                  className="mt-10 space-y-5"
                >
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={signInDetails.email}
                        onChange={(e) =>
                          setSignInDetails({
                            ...signInDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <div className="absolute right-5 top-4">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPassword(!showPassword);
                          }}
                          className="text-purple-700 font-medium"
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </div>
                      </div>
                      <label
                        htmlFor="password"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Enter Password
                      </label>
                      <input
                        required
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={signInDetails.password}
                        onChange={(e) =>
                          setSignInDetails({
                            ...signInDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Password (Minimum of 8 characters)"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="my-5 flex gap-4 items-center">
                      <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                        className="w-4 h-4"
                      />
                      <p>Remain signed in </p>
                    </div>
                    <div>
                      <button className="p-2 text-center w-full bg-purple-600 text-white text-lg rounded-lg">
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {newUser ? (
          <div className="fixed right-0 h-full w-1/3 bg-purple-200 p-10">
            <p className="font-bold text-right text-purple-700 underline">
              <button onClick={() => setNewUser(false)} className="underline">
                Sign In
              </button>
            </p>
            <div className="relative mt-20 w-[80%] mx-auto bg-red-200 h-1/2 rounded-r-xl">
              <div className="flex pt-2 pl-2 gap-5 absolute left-20 bottom-10 h-14 rounded-l-lg w-full bg-slate-100">
                <div className="w-7 h-7 rounded-full bg-purple-500"></div>
                <div>
                  <p className="font-semibold text-purple-800 ">
                    Invoice Created
                  </p>
                  <p className="text-[.6rem] text-purple-600 font-normal">
                    Your invoice has been successfully created!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 w-[80%] mx-auto">
              <p className="text-black font-black text-center text-lg">
                Seamless Payments!
              </p>
              <p className="text-center font-light text-slate-950">
                iTrack helps you manage all customer payments related to your
                small business! Send invoices and debt reminders while avoiding
                misleading double entries
              </p>
            </div>
          </div>
        ) : (
          <div className="fixed right-0 h-full w-1/3 bg-purple-200 p-10">
            <p className="font-bold text-right text-purple-700 underline">
              <button onClick={() => setNewUser(true)} className="underline">
                Sign Up
              </button>
            </p>
            <div className="relative mt-20 w-[80%] mx-auto bg-red-200 h-1/2 rounded-r-xl">
              <div className="flex pt-2 pl-2 gap-5 absolute left-20 bottom-10 h-14 rounded-l-lg w-full bg-slate-100">
                <div className="w-7 h-7 rounded-full bg-purple-500"></div>
                <div>
                  <p className="font-semibold text-purple-800 ">
                    Invoice Created
                  </p>
                  <p className="text-[.6rem] text-purple-600 font-normal">
                    Your invoice has been successfully created!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 w-[80%] mx-auto">
              <p className="text-black font-black text-center text-lg">
                Seamless Payments!
              </p>
              <p className="text-center font-light text-slate-950">
                iTrack helps you manage all customer payments related to your
                small business! Send invoices and debt reminders while avoiding
                misleading double entries
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
