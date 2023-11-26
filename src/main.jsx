import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// alert(window.outerHeight)
// alert(window.outerWidth)

const screenHeight = window.outerHeight >= 800
const screenWidth = window.outerWidth >= 1280

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {(screenHeight && screenWidth) ? <App /> : 
      <div className="fixed h-full w-full flex items-center justify-center">
        <div className="w-[80%]  text-center font-bold text-lg bg-red-40 rounded-md shadow shadow-slate-400 flex items-center justify-center p-5">
          <div className="space-y-3">
            <p>We sincerely apologise for any inconvenience.</p>
          <p>This website isn't responsive across all screen.</p>
          <p>Please, bear with us and visit this website using a larger screen like a PC or a laptop.</p>
          <p>Thank you.</p>
          </div>
         
        </div>
      </div> 
      }
    </BrowserRouter>
  </React.StrictMode>
);
