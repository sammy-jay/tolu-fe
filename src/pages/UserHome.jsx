import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
let dotEnv = import.meta.env;

function ExpandSideBar({
  navItems,
  setNavItems,
  setNavBarState,
  getResponse,
  handleTransact,
  transactNav,
  setCustomersNav,
  handleCreateNew,
  customersNav,
}) {

  return (
    <div className="fixed z-20 left-0 top-0 h-full w-[20%] bg-slate-200">
      {/* name, logo */}
      <div className="relative border-b border-slate-900">
        <div className="relative w-[70%] ml-5 flex justify-start gap-[5%] bg-yellow-40 my-8 ">
          <div>
            <div className="w-12 h-12 bg-blue-400 rounded-xl"></div>
          </div>
          <p className="text-black text-[2rem]">iTrack</p>
        </div>
        <div
          onClick={() => setNavBarState("collapse")}
          className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
        >
          <div className="h-10 w-10 rounded-full bg-slate-50 p-2">
            <div className="w-full h-full rounded-full bg-purple-600 flex items-center justify-center text-slate-100">
              <p>+</p>
            </div>
          </div>
        </div>
      </div>

      {/* items */}
      <ul className="mx-5 space-y-5 my-5 bg-red-30">
        <li
          onClick={() => {
            
            setNavItems("Dashboard");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-red-300 p-2 rounded-lg ${
            !(navItems === "Dashboard") ? "bg-none" : "bg-red-300"
          }`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          <p className="text-xl">Dashboard</p>
          {navItems === "Dashboard" && (
            <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("Customers");
            getResponse("Customers");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-red-300 p-2 rounded-lg ${
            !(navItems === "Customers") ? "bg-none" : "bg-red-300"
          }`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          <p className="text-xl">Customers</p>
          {navItems === "Customers" && (
            <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("Transactions");
            getResponse("Transactions");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-red-300 p-2 rounded-lg ${
            !(navItems === "Transactions") ? "bg-none" : "bg-red-300"
          }`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          <p className="text-xl">Transactions</p>

          {navItems === "Transactions" && (
            <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
          )}
        </li>
        {navItems === "Transactions" && (
          <div className="ml-5 space-y-5 bg-red-60 w-full">
            <div
              onClick={() => handleTransact("all")}
              className="flex gap-5 items-center"
            >
              {transactNav === "all" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                // <p className="font-light text-base">All</p>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "all" ? (
                <p className="font-bold text-base">All</p>
              ) : (
                <p className="font-light text-base">All</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("unpaidDebts")}
              className="flex gap-5 items-center"
            >
              {transactNav === "unpaidDebts" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "unpaidDebts" ? (
                <p className="font-bold text-base">Unpaid Debts</p>
              ) : (
                <p className="font-light text-base">Unpaid Debts</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("completedPayments")}
              className="flex gap-5 items-center"
            >
              {transactNav === "completedPayments" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "completedPayments" ? (
                <p className="font-bold text-base">Completed Payments</p>
              ) : (
                <p className="font-light text-base">Completed Payments</p>
              )}
            </div>
          </div>
        )}
        <li
          onClick={() => {
            setNavItems("Invoices");
            getResponse("Invoices");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-red-300 p-2 rounded-lg ${
            !(navItems === "Invoices") ? "bg-none" : "bg-red-300"
          }`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          <p className="text-xl">Invoices</p>
          {navItems === "Invoices" && (
            <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("CreateNew");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-red-300 p-2 rounded-lg ${
            !(navItems === "CreateNew") ? "bg-none" : "bg-red-300"
          }`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          <p className="text-xl">Create New</p>

          {navItems === "CreateNew1" && (
            <div>
              <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
              <p className="text-xl">Create New</p>
              <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
            </div>
          )}

          {navItems === "CreateNew" && (
            <>
              <div className="absolute top-0 w-2 h-full bg-red-300 -right-5 rounded-l-lg "></div>
              <div
                id="createNewDiv"
                className={`absolute top-0 w-2 h-full bg-red-60 -right-5 rounded-l-lg`}
              >
                <div className="relative left-2 bg-slate-200 w-60 shadow-md shadow-slate-600 rounded-md">
                  <div className="px-5 py-2 flex flex-col">
                    <div
                      onClick={() => {
                        handleCreateNew("createCustomer");
                      }}
                      className="py-3 text-left flex items-center gap-2 border-b border-slate-500"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 hover:text-purple-800 hover:font-semibold font-medium">
                        <button>Create Customer</button>
                      </p>
                    </div>
                    <div className="group py-3 text-left flex items-center gap-2  bg-red-20 w-60">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold grou">
                        Create Invoice
                        <div className="absolute bg-slate-200 w-60 left-full top-16 hidden group-hover:block px-5 py-2 shadow-md shadow-slate-600 rounded-r-md ">
                          <div className="py-3 text-left flex items-center gap-2 border-b border-slate-500">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>From Existing Debt</button>
                            </p>
                          </div>
                          <div className="py-3 text-left flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>New Invoice</button>
                            </p>
                          </div>
                        </div>
                      </p>

                      <div className="ml-5">=</div>
                    </div>
                    <div className="py-3 flex items-center gap-2 text-left border-t border-slate-500">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold">
                        Record Transaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* { navItems === "CreateNew" && 
            <div className="absolute w-52 h-20 left-full bg-green-400">
                    ggg
            </div>} */}
        </li>
      </ul>
    </div>
  );
}

function CollapseSideBar({ navItems, setNavItems, setNavBarState }) {
  return (
    <div className="fixed z-20 left-0 top-0 h-full w-[5%] bg-slate-200">
      {/* name, logo */}
      <div className="relative border-b border-slate-900">
        <div className="relative w-[70%] mx-2 flex justify-start gap-[5%] bg-yellow-40 my-8 ">
          <div>
            <div className="w-12 h-12 bg-blue-400 rounded-xl"></div>
          </div>
          {/* <p className="text-black text-[2rem]">iTrack</p> */}
        </div>
        <div
          onClick={() => setNavBarState("expand")}
          className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
        >
          <div className="h-10 w-10 rounded-full bg-slate-50 p-2">
            <div className="w-full h-full rounded-full bg-purple-600 flex items-center justify-center text-slate-100">
              <p>+</p>
            </div>
          </div>
        </div>
      </div>

      {/* items */}
      <ul className="mx-1 space-y-5 my-5 bg-red-30">
        <li
          onClick={() => setNavItems("Dashboard")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl">D</div>
          {/* <p className="text-md">Dashboard</p> */}
          {navItems === "Dashboard" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-red-300 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Customers")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl">C</div>
          {/* <p className="text-xl">Customers</p> */}
          {navItems === "Customers" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-red-300 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Transactions")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl">T</div>
          {/* <p className="text-xl">Transactions</p> */}
          {navItems === "Transactions" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-red-300 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Invoices")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl">I</div>
          {/* <p className="text-xl">Invoices</p> */}
          {navItems === "Invoices" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-red-300 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("CreateNew")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg`}
        >
          <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
          {/* <p className="text-xl">Create New</p> */}
          {navItems === "CreateNew" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-red-300 -right-1 rounded-l-lg "></div>
          )}
        </li>
      </ul>
    </div>
  );
}

function SideBar() {
  const [user, setUser] = useState("");
  const [navItems, setNavItems] = useState("Dashboard");
  const [customersNav, setCustomersNav] = useState("");
  const [transactNav, setTransactNav] = useState("all");
  const [navBarState, setNavBarState] = useState("expand");
  const [navRes, setNavRes] = useState({
    dashboard: "",
    customers: "",
    transaction: "",
    invoices: "",
    createNew: "",
  });
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "Doe",
    email: "",
    phone: "",
    country: "",
    state: "Oyo",
    address: "",
    zipCode: "",
    description: "",
    imageUrl: "",
  });
  const [loadingState, setLoadingState] = useState(false);
  const [createNewOptions, setCreateNewOptions] = useState({
    customer: false,
    transaction: false,
    invoice: false,
  });
  const [newCustomer, setNewCustomer] = useState("");
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState({
    itemName: "",
    itemPrice: "",
    itemQty: "",
  });
  const navigate = useNavigate();

  let baseUrl, url;
  if (dotEnv.MODE === "development") {
    baseUrl = "http://localhost:3000";
  } else {
    baseUrl = "https://itrack-server.vercel.app";
  }

  function handleAddItem(e) {
    e.preventDefault();
    // alert("g")
    let newProduct;
    try {
      if (product.length < 1) {
        newProduct = [];
      } else {
        newProduct = [...product];
      }
    } catch (error) {
      newProduct = [];
    }

    newProduct.push(item);
    setProduct((n) => newProduct);
    setItem({
      itemName: "",
      itemPrice: "",
      itemQty: "",
    });
  }

  async function handleInvoiceSubmit() {
    let seller, customer, products, amountTotal, dateIssued, dateDue, paidStatus, debt
    seller = JSON.stringify(user)
    customer = document.getElementById("selectCustomer").value
    products = JSON.stringify(product)
    amountTotal = 0
    for (let items of product) {
      amountTotal += (parseFloat(items.itemPrice) * parseFloat(items.itemQty))
    }
    dateIssued = document.getElementById("dateIssue").value
    dateDue = document.getElementById("dateDue").value
    let paidAmt = parseFloat(document.getElementById("paidStatus").value)

    if (paidAmt >= amountTotal) {
      paidStatus = "paid"
      debt = "0"
    } else {
      paidStatus = "unpaid"
      debt = (amountTotal - paidAmt).toString()
    }

    let invoiceDetails = {
      seller: seller,
      customer: customer,
      products: products,
      amountTotal: amountTotal.toString(),
      dateIssued: dateIssued,
      paidStatus: paidStatus,
      duePayDate: dateDue,
      debt: debt,
      
    }
    
    try{
      url = baseUrl + "/itrack/invoice-payment-link"
      let response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(invoiceDetails)
      })
      let data = await response.json()
      if (response.status === 200) {
        alert(JSON.stringify(data.message))
        alert("Invoice Craeted for Customer Successfully")
        setNavItems("Customers")
        setCreateNewOptions({...createNewOptions, invoice: false})
      }

      
    } catch(error) {
      console.log(error)
      alert("Error Creating Invoice")
    }
    
    
  }
  
// handleInvoiceSubmit()


  useEffect(() => {
    let currentUser = localStorage.getItem("currentUser");
    try {
      currentUser = JSON.parse(currentUser);
      setUser(currentUser);
    } catch (error) {
      navigate("/log-in");
    }
  }, []);

  async function getResponse(param) {
    setLoadingState(true);
    let response, data;
    if (param === "Customers") {
      setNewCustomer("");
      // alert("C")
      try {
        url = baseUrl + "/itrack/customers";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        // alert(JSON.stringify(data.message[0].firstName))
        setLoadingState(false);
        setNavRes({ ...navRes, customers: data.message });
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, customers: "" });
      }
    } 
    if (param === "Transactions") {
      // alert("T")
      try {
        url = baseUrl + "/itrack/transactions";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        setLoadingState(false);
        localStorage.setItem("transactions", JSON.stringify(data.message));
        setNavRes({ ...navRes, transaction: data.message });
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, transaction: "" });
      }
    } 
    if (param === "Invoices") {
    
      let hold = {customer: "", transaction: ""}

      try {
        url = baseUrl + "/itrack/customers";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        // alert(JSON.stringify(data.message[0].firstName))
        setLoadingState(false);
        // setNavRes({ ...navRes, customers: data.message });
        hold.customer = data.message
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, customers: "" });
      }

      try {
        url = baseUrl + "/itrack/transactions";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        setLoadingState(false);
        // alert(JSON.stringify(data.message))
        localStorage.setItem("transactions", JSON.stringify(data.message));
        // setNavRes({ ...navRes, invoices: data.message });
        hold.transaction = data.mesage
        setNavRes({ ...navRes, customers: hold.customer, transaction: data.message });
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, invoices: "" });
      }
      
    } 

    // alert("yes")
  }
    

  function handleCreateNew(param) {
    let createNewDiv = document.getElementById("createNewDiv");
    createNewDiv.style.visibility = "hidden";
    // alert(param);
    // let p = "CreateNew1";

    setCustomersNav(param);
    setNavItems("CreateNew1");
  }
  // alert(navItems)

  function handleTransact(param) {
    // alert(param)
    if (param === "all") {
      let localTransactions = localStorage.getItem("transactions");
      if (localTransactions) {
        localTransactions = JSON.parse(localTransactions);
        // let newTransact = localTransactions.filter(items => items.paidStatus === "unpaid")
        setNavRes({ ...navRes, transaction: localTransactions });
      }
    }
    if (param === "unpaidDebts") {
      let localTransactions = localStorage.getItem("transactions");
      let newTransact;
      if (localTransactions) {
        localTransactions = JSON.parse(localTransactions);
        newTransact = localTransactions.filter(
          (items) => items.paidStatus === "unpaid"
        );
        setNavRes({ ...navRes, transaction: newTransact });
      }
    }
    if (param === "completedPayments") {
      let localTransactions = localStorage.getItem("transactions");
      if (localTransactions) {
        localTransactions = JSON.parse(localTransactions);
        let newTransact = localTransactions.filter(
          (items) => items.paidStatus === "paid"
        );
        setNavRes({ ...navRes, transaction: newTransact });
      }
    }
    // return
    setTransactNav(param);
  }

  async function handleCustomerFormChange(e) {
    let file = document.getElementById("file");
    // file.value = "";
    let name = e.target.name;
    let val = e.target.value;
    if (name === "imageUrl") {
      // val = e.target.files[0]
      try {
        let customerPhoto = new FormData();
        val = e.target.files[0];
        customerPhoto.append("file", val);
        customerPhoto.append("upload_preset", dotEnv.VITE_PRESET_NAME);
        customerPhoto.append("cloud_name", dotEnv.VITE_CLOUD_NAME);
        let response = await fetch(dotEnv.VITE_CLOUDINARY_URL, {
          method: "POST",
          body: customerPhoto,
        });

        let data = await response.json();
        // alert(data.url);
        if (data.url) {
          val = data.url;
        } else {
          val =
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-avatar-370-456322.png%3Ff%3Dwebp&tbnid=1rGRKqJOEIn0XM&vet=12ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Favatar-370&docid=7dU_SDvjQWqpFM&w=256&h=256&q=avatar%20icon&ved=2ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0";
        }
      } catch (error) {
        val =
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-avatar-370-456322.png%3Ff%3Dwebp&tbnid=1rGRKqJOEIn0XM&vet=12ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Favatar-370&docid=7dU_SDvjQWqpFM&w=256&h=256&q=avatar%20icon&ved=2ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0";
      }
      // file.value = "";
      // setPicLoad(false);
    }
    setCustomerDetails({ ...customerDetails, [name]: val });
  }

  async function handleCustomerFormSubmit(e) {
    e.preventDefault();
    // alert("Submited")
    //  alert(JSON.stringify(customerDetails))
    url = baseUrl + "/itrack/create-customer";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...customerDetails, sellerEmail: user.email }),
    });
    let data = await response.json();
    // alert(JSON.stringify(data))
    if (response.status === 200 && data.message.firstName) {
      alert("Customer Created Successfully");
      setNewCustomer(data.message);
      setNavItems("Customers");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="overflow-scroll">
      {navBarState === "expand" ? (
        <ExpandSideBar
          navItems={navItems}
          setNavItems={setNavItems}
          setNavBarState={setNavBarState}
          getResponse={getResponse}
          handleTransact={handleTransact}
          transactNav={transactNav}
          setCustomersNav={setCustomersNav}
          handleCreateNew={handleCreateNew}
          customersNav={customersNav}
        />
      ) : (
        <CollapseSideBar
          navItems={navItems}
          setNavItems={setNavItems}
          setNavBarState={setNavBarState}
        />
      )}
      {/* <div className="relative z-10 bg-red-300">
            kkndkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </div> */}
      <div
        className={` fixed z-10 h-full right-0 top-0 ${
          navBarState === "expand"
            ? "left-[20%] bg-green-500"
            : "left-[5%] bg-yellow-500"
        }`}
      >
        <div className="bg-slate-100 h-28 px-2 flex justify-between p-5 w-full">
          <div className="flex w-[50%] ml-5 gap-5 items-center">
            <div className="w-[50%]">
              <h2 className="font-semibold text-xl text-gray-950">
                Hello {user.firstName + " " + user.lastName}!
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Manage your payments today!
              </p>
            </div>
            <div className="relative bg-red-20 w-[40%]">
              <div className="absolute w-5 h-5 rounded-full bg-blue-600 top-2 left-2"></div>
              <input
                type="text"
                className="w-full px-10 py-2 rounded-lg bg-slate-200"
                placeholder="Search (Ctrl+/)"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 justify-end bg-red-40 w-[35%]">
            <div className="w-10 h-10 bg-red-500"></div>
            <div className="w-14 h-14 rounded-full bg-slate-200"></div>
            <div>
              <h2 className="font-semibold text-2xl text-gray-950">
                {user.firstName + " " + user.lastName}!
              </h2>
              <p className="text-slate-500 font-normal text-base">
                Finesse Stores
              </p>
            </div>
            <div>!</div>
          </div>
        </div>
        <div
          className={`relative bg-gray-200 h-full flex pt-20 justify-center`}
        >
          {navItems === "Dashboard" && (
            <p className="text-5xl text-red-600 font-black">Dashboard</p>
          )}
          {navItems === "Customers" && !newCustomer.firstName && (
            <div className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.customers === "No Customers Created" ||
              navRes.customers === "" ? (
                <p>No Customers Created</p>
              ) : (
                <div>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.customers.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg">
                              Create Customer
                            </button>
                          </div>
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMERS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            PHONE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            EMAIL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ADDRESS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL DEBT
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTIONS
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.customers.map((items, index) => {
                          return (
                            <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20 w-[16%] flex items-center justify-center ml-5">
                                <div className="w-[20%] flex items-center justify-center">
                                  <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center overflow-hidden">
                                    <img src={items.imageUrl} />
                                  </div>
                                </div>

                                <p className="w-[80%] border-slate-400 pl-1 truncate text-ellipsis ">
                                  {items.firstName + " " + items.lastName}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%] ">
                                <p className="border- border-slate-400 ">
                                  {items.phone}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <p className="border- border-slate-400 truncate text-ellipsis ">
                                  {items.email}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <p className="border- border-slate-400 px-2 truncate text-ellipsis ">
                                  {items.address}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <p className="border- border-slate-400 px-5 flex gap-1 ">
                                  # {items.debt ? <p>{items.debt}</p> : 0}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <div className="h-full w-1 bg-blue-600 ml-5">
                                  ...
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {navItems === "Customers" && newCustomer.firstName && (
            <div className=" bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
              <div className="relative h-16 bg-red-300 rounded-t-lg rainbo overflow-hidden">
                <div className="absolute top-0 -left-5 bg-emerald-400 w-[30%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[28%] bg-emerald-300 w-[20%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[48%] bg-orange-200 w-[10%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[55%] bg-red-400 w-full h-full -skew-x-12"></div>
              </div>
              <div className="h-20 rounded-b-lg bg-red-60 shadow-md shadow-slate-400">
                <div className="absolute w-24 h-24 top-14 left-10 rounded-lg bg-white p-1">
                  <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={newCustomer.imageUrl} />
                  </div>
                </div>
                <div className="ml-32 p-4 h-full bg-yellow-30 flex justify-between">
                  <div>
                    <p className="text-lg font-bold">
                      {newCustomer.lastName + "   " + newCustomer.firstName}
                    </p>
                    <div className="flex gap-5">
                      <div className="flex bg-red-20">
                        <div classsName="w-10 h-10 bg-red-300"></div>
                        <p className="text-slate-400 text-base font-semibold">
                          {newCustomer.country}{" "}
                        </p>
                      </div>
                      <div className="flex bg-red-20">
                        <div classsName="w-5 h-5 bg-red-300"></div>
                        <p className="text-slate-400 text-base font-semibold">
                          {newCustomer.country}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-60 flex items-end">
                    <button className="px-5 py-1 border-2 text-base font-semibold border-purple-800 rounded-lg">
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative mt-5">
                <div className="absolute left-0 w-[25%] bg-red-40 top-0">
                  <div className="py-2 px-2 rounded-lg bg-slate-100 shadow-md shadow-slate-400 space-y-2 ">
                    <p className="monospace text-slate-400 text-sm">ABOUT</p>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Full Name:{" "}
                        {newCustomer.lastName + "   " + newCustomer.firstName}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Status: ....{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Total Debt: ....{" "}
                      </p>
                    </div>
                    <div>
                      <p className="monospace text-slate-400 text-sm">
                        CONTACTS
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Contacts: {newCustomer.phone}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Email: {newCustomer.email}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="monospace text-slate-400 text-sm">
                        ADDRESS
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Location:{" "}
                        {newCustomer.zipCode +
                          ", " +
                          newCustomer.state +
                          ", " +
                          newCustomer.country}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Home: {newCustomer.address}{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[30%] bg-red-500 h-full w-[50%]">
                  <div className="w-full h-full bg-slate-700">odkdbubj</div>
                </div>
              </div>
            </div>
          )}

          {navItems === "Transactions" && (
            <p className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.transaction === "No Transaction Recorded" ||
              navRes.transaction === "" ? (
                <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
                  <div className="w-full h-full flex pt-[20%] justify-center">
                    <div className="text-center space-y-2">
                      <p className="font-black text-xl">No Transaction Yet</p>
                      <p className="text-slate-600 font-normal">
                        You have not created an invoice yet !
                      </p>
                      <div>
                        <button
                         onClick={() => {
                          setNavItems("Invoices");
                          setCreateNewOptions({
                            ...createNewOptions,
                            invoice: true,
                          }) }
                        }
                          className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
                        >
                          New Transaction
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.transaction.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg">
                              New Transaction
                            </button>
                          </div>
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[14%]">
                          <p className="border-r border-slate-400 px-5 ">#ID</p>
                        </div>
                        <div className="bg-red-20 w-[20%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMER
                          </p>
                        </div>
                        <div className="bg-red-20 w-[20%]">
                          <p className="border-r border-slate-400 px-5 ">
                            DESCRIPTION
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            DATE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[12%]">
                          <p className="border-r border-slate-400 px-5 ">
                            STATUS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTION
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.transaction.map((items, index) => {
                          return (
                            <div className="px-5 py-2 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20  w-[14%]">
                                {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                                <p className="border- border-slate-400 px-5 text-lef">
                                  {items.invoiceId}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[20%] flex items-center pl-3">
                                <div className="w-5 h-5 rounded-full bg-red-900">
                                  {/* <img src={} /> */}
                                </div>
                                <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[90%] bg-blue-40">
                                  {/* <p>{JSON.parse(items.customer).name}</p> */}
                                  <p className="truncate text-ellipsis bg-red-20">
                                    {items.customer}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[20%] ml-3 pl-3">
                                <div className="">
                                  <p>
                                    {(JSON.parse(items.products))
                                      .length > 1 ? (
                                      <p className="text-lg text-black font-semibold">
                                        {
                                          (
                                            JSON.parse(items.products)
                                          ).length
                                        }{" "}
                                        items
                                      </p>
                                    ) : (
                                      <p className="text-lg font-semibold">
                                        {
                                          (
                                            JSON.parse(items.products)
                                          ).length
                                        }{" "}
                                        item
                                      </p>
                                    )}
                                  </p>
                                  <div className="flex gap-1">
                                    {(
                                      JSON.parse(items.products)
                                    ).map((items) => (
                                      <p className="p-[2px] rounded font-light text-black">
                                        {items.itemName},
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%] ml-3 pl-1">
                                <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                                  #{items.amountTotal}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-3 pl-2">
                                <p className="border- border-slate-400">
                                  {items.dateIssued.split("-").reverse().join("-")}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[12%]">
                                <div className="border- border-slate-400 flex ml-3 ">
                                  {items.paidStatus === "paid" ? (
                                    <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  ) : (
                                    <span className="px-2 py-1 text-center bg-pink-200 text-red-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full flex  bg-blue-60 ml-5 justify-between">
                                  <div className="w-[40%] bg-red-400 h-full">
                                    p
                                  </div>
                                  <div className="w-[40%] bg-yellow-200">h</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </p>
              )}
            </p>
          )}
          {((navItems === "Invoices") && createNewOptions.invoice && (navRes.customers === "")) && 
          
            <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3 flex flex-col gap-2 text-3xl items-center -mt-32 font-bold justify-center">
              <p>No customer yet.</p>
              {navRes.customers.length}
              <p>Add a customer.</p>
              <button onClick={()=>{ setNavItems("CreateNew"); setCreateNewOptions({...createNewOptions, customer: true}) }} className=" p-3 rounded-mg bg-purple-600 text-xl text-slate-200 rounded-md">Create New Customer</button>
            </div>
          }
          {(navItems === "Invoices" && createNewOptions.invoice && (navRes.customers !== "")) && (
            <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
              <div className="relative w-full h-full overflow-scroll">
                <p className="text-slate-700 text-xl font-semibold mb-1">
                  Create Invoice
                </p>
                <div className="absolute w-full bg-gray-100 shadow-md shadow-slate-400 h-[70vh] overflow-scroll">
                  <div className="flex justify-between items-center bg-red-40 border-b-2 border-slate-400 p-5">
                    <div className="w-[45%] space-y-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 rounded-md bg-purple-600"></div>
                        <p className="text-slate-600 font-bold">Lena Stores</p>
                      </div>
                      <p className="font-light text-slate-600">
                        (903) 545-2453 11953 County Rd #247 Oakwood, Texas(TX),
                        75855
                      </p>
                    </div>
                    <div className="w-[45%] space-y-3 bg-red-30">
                      <div className="flex justify-evenly">
                        <p className="font-light text-slate-700 w-[40%] text-right">
                          Date Issued:
                        </p>
                        <div className="relative w-32 p-4 bg-red-20 rounded-md">
                          <input
                            type="date"
                            name="dateIssue"
                            id="dateIssue"
                            className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400"
                          />
                        </div>
                      </div>
                      <div className="flex justify-evenly">
                        <p className="font-light text-slate-700 w-[40%] text-right">
                          Date Due:
                        </p>
                        <div className="relative w-32 p-4 bg-red-20 rounded-md">
                          <input
                            type="date"
                            name="dateDue"
                            id="dateDue"
                            className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="w-full px-5">
                      <p className="text-lg font-semibold my-1">Invoice To:</p>
                      <select id="selectCustomer" name="selectCustomer" className="p-2 w-full my-2 text-lg">
                        <option selected disabled>
                          Select
                        </option>
                        {navRes.customers.map((items) => {
                          return (
                            <option
                              value={items.email}
                              className=" text-[5px] bg-red-400 h-10"
                            >
                              <div className=" bg-red-600 h-10">
                                <p className="text-lg h-10">{items.email}</p>
                              </div>
                            </option>
                          );
                        })}
                      </select>
                      <span>Amount Paid: </span><input id="paidStatus" name="paidStatus" type="text" className="p-2 w-full border-[1px] border-slate-400 rounded-md" />
                    </div>
                  </div>

                  <div className="m-3 border-[1px] border-slate-400 p-2 rounded-md ">
                    {product.length >= 1 && (
                      <div>
                        <div className="flex justify-between px-5 py-2 text-sm border-b border-slate-400">
                          <p className="w-[40%]">ITEM</p>
                          <p className="w-[20%]">PRICE</p>
                          <p className="w-[20%]">QUANTITY</p>
                        </div>
                        {product.map((items) => {
                          return (
                            <div className="flex justify-between px-5">
                              <p className="w-[40%]">{items.itemName} </p>
                              <p className="w-[20%]">{items.itemPrice}</p>
                              <p className="w-[20%]">{items.itemQty}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="">
                      <div className="flex justify-between px-5">
                        <p className="w-[40%]">Item</p>
                        <p className="w-[20%]">Unit Price</p>
                        <p className="w-[20%]">Quantity</p>
                      </div>
                      <form
                        onSubmit={handleAddItem}
                        className="flex flex-wrap justify-between p-5 mx-5 borde-[1px] border-slate-400 rounded-md bg-transparent"
                      >
                        <input
                          name="itemName"
                          value={item.itemName}
                          onChange={(e) =>
                            setItem({
                              ...item,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-[40%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent "
                          placeholder="Item name"
                        />
                        <input
                          name="itemPrice"
                          value={item.itemPrice}
                          onChange={(e) =>
                            setItem({
                              ...item,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-[20%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent"
                          placeholder="Item price"
                        />
                        <input
                          name="itemQty"
                          value={item.itemQty}
                          onChange={(e) =>
                            setItem({
                              ...item,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-[20%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent"
                          placeholder="Item quantity"
                        />
                        {/* <input className="my-2 w-full py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent" placeholder="Item name" /> */}
                        <div className="w-full text-right">
                          <button
                            type="submit"
                            className="hover:bg-green-500 p-1 my-2 w-28 rounded text-slate-200 font-normal bg-purple-700 text-lg"
                          >
                            Add Item
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="flex gap-2 p-3">
                      <div>
                        <button
                          onClick={()=>handleInvoiceSubmit()}
                          className="hover:bg-green-500 p-1 my-2 w-20 rounded text-slate-200 font-normal bg-purple-700 text-lg"
                        >
                          SAVE
                        </button>
                      </div>
                      <div>
                        <button  onClick={() => {
                          setNavItems("Dashboard");
                          setProduct([])
                            setCreateNewOptions({
                              ...createNewOptions,
                              invoice: false,
                            })
                          }} className="hover:bg-gray-800 p-1 my-2 w-20 rounded text-slate-400 font-normal text-lg border-[1px] border-slate-400 ">
                          CANCEL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute left-[72%] w-[27%] bg-gray-100 shadow-md shadow-slate-400 p-5">
                </div> */}
              </div>
            </div>
          )}
          {navItems === "Invoices" && !createNewOptions.invoice && (
            <p className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.transaction === "No Transaction Recorded" ||
              navRes.transaction === "" ? (
                <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
                  <div className="w-full h-full flex pt-[20%] justify-center">
                    <div className="text-center space-y-2">
                      <p className="font-black text-xl">No Invoices Yet</p>
                      <p className="text-slate-600 font-normal">
                        You have not created an invoice yet !
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            setCreateNewOptions({
                              ...createNewOptions,
                              invoice: true,
                            })
                          }
                          className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
                        >
                          Create Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.transaction.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <button
                              onClick={() =>
                                setCreateNewOptions({
                                  ...createNewOptions,
                                  invoice: true,
                                })
                              }
                              className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
                            >
                              Create Invoice
                            </button>
                          </div>
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[14%]">
                          <p className="border-r border-slate-400 px-5 ">#ID</p>
                        </div>
                        <div className="bg-red-20 w-[25%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMER
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ISSUED DATE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            BALANCE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTION
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.transaction.map((items, index) => {
                          return (
                            <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20  w-[14%]">
                                {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                                <p className="border- border-slate-400 px-5 text-lef">
                                  {items.invoiceId}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[25%] flex items-center justify-start pl-2">
                                <div className="w-5 h-5 rounded-full bg-red-900"></div>
                                <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[70%]">
                                  <p>{(items.customer)}</p>
                                  <p className=" bg-red-20">
                                    {/* {JSON.parse(items.customer).email}{" "} */}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%] pl-3">
                                <div className="">
                                  {/* <p>{ (Object.keys(JSON.parse(items.products)).length) > 1 ?
                                  <p className="text-lg text-black font-semibold">{(Object.keys(JSON.parse(items.products)).length) } items</p> : 
                                  <p className="text-lg font-semibold">{(Object.keys(JSON.parse(items.products)).length) } item</p>
                                   }</p>
                                  <div className="flex gap-1">
                                    {Object.keys(JSON.parse(items.products)).map(items => <p className="p-[2px] rounded font-light text-black">{items},</p>)}
                                  </div> */}
                                  <p className="font-mono text-red-60 text-lg"># {items.amountTotal}</p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-2 pl-5">
                                <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                                  
                                  {items.dateIssued.split("-").reverse().join("-")}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-3">
                                <div className="border- border-slate-400 px-5">
                                  {items.paidStatus === "paid" ? (
                                    <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  ) : (
                                    <p className="font-mono text-red-600 text-lg">{items.debt}</p>
                                    
                                  )}
                                </div>
                              </div>
                              {/* <div className="bg-red-20 w-[10%]">
                                <div className="border- border-slate-400 flex ml-3 ">
                                { items.paidStatus === "paid" ?
                                <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">{items.paidStatus}</span> :
                                <span className="px-2 py-1 text-center bg-pink-200 text-red-500 text-sm rounded">{items.paidStatus}</span>
                                 }
                                </div>
                              </div> */}
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full flex  bg-blue-60 ml-5 justify-between">
                                  <div className="w-[40%] bg-red-400 h-full">
                                    p
                                  </div>
                                  <div className="w-[40%] bg-yellow-200">h</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </p>
              )}
            </p>
          )}
          {navItems === "CreateNew" && customersNav === "createCustomer" && (
            <div className="bg-blue-40 absolute top-0 left-0 h-full w-full z-50 p-3">
              <div>
                <div className="inline-block">-</div>
                <p className="font-bold text-gray-800 text-2xl inline-block">
                  Create Customer
                </p>
              </div>
              <div className="rounded-lg shadow shadow-slate-600 my-5 p-5 bg-gray-100 ">
                <div className="flex items-center gap-5">
                  <div>
                    <div className="w-20 h-20 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="mt-2">
                    <div>
                      <input
                        id="file"
                        name="imageUrl"
                        onChange={handleCustomerFormChange}
                        type="file"
                        className="absolute w-32 p-2 opacity-0"
                      />
                      <button className="p-2 w-32 rounded-md text-slate-200 font-light bg-purple-700">
                        Upload photo
                      </button>
                    </div>
                    <p className="font-normal text-slate-700 text-sm">
                      Allowed JPG, GIF or PNG. Max size of 800KB
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleCustomerFormSubmit}
                  className="mt-10 space-y-5"
                >
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="firstName"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        required
                        name="firstName"
                        value={customerDetails.firstName}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="lastName"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        required
                        name="lastName"
                        value={customerDetails.lastName}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="email"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        required
                        name="email"
                        value={customerDetails.email}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="phone"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        required
                        name="phone"
                        value={customerDetails.phone}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="country"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        value={customerDetails.country}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="state"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        State
                      </label>
                      <input
                        id="state"
                        name="state"
                        value={customerDetails.state}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="address"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        value={customerDetails.address}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="zipCode"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Zip Code
                      </label>
                      <input
                        id="zipCode"
                        name="zipCode"
                        value={customerDetails.zipCode}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="description"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Short note about customer (Optional)
                      </label>
                      <input
                        id="description"
                        name="description"
                        value={customerDetails.description}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="relative w-[10%]">
                      <button
                        type="submit"
                        className="p-2 w-32 rounded-md text-slate-200 font-light bg-purple-700 hover:bg-purple-800 active:bg-green-600"
                      >
                        Save Changes
                      </button>
                    </div>
                    <div className="relative w-[10%]">
                      <button
                        onClick={() => {
                          setNavItems("Dashboard");
                        }}
                        className="p-2 w-24 rounded-md text-slate-400 font-light bg-transaprent border-[2px] border-slate-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
