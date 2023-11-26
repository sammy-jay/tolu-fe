import React, { useState } from "react";
let dotEnv = import.meta.env

function MakePayment() {
  const [paymentDetails, setPaymentDetails] = useState({
    businessEmail: "",
    email: "",
    invoiceNo: "",
    amount: "",
  });
  const [paymentLink, setPaymentLink] = useState({
    link: "",
    notice: "",
    state: false
  })



  function handleChange(e) {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  }

  let baseUrl;
  if (dotEnv.MODE === "development")  {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }
  

  function clear() {
    setPaymentLink({
        link: "",
        notice: "",
        state: false
      })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setPaymentLink({...paymentLink, state: true})
    let url = baseUrl + "/itrack/portal-payment"
    let response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(paymentDetails)
    })
    let data = await response.json()
    // alert(data.message)
    if (response.status === 200) {
        setPaymentLink({...paymentLink,state:false, notice:"", link: data.message})
    }
    if (response.status === 201) {
        setPaymentLink({...paymentLink, state: false, link: "", notice: data.message})
    }
    // setPaymentLink({...paymentLink, state: false})
    
    // alert(JSON.stringify(paymentDetails));

  }
  return (
    <div>
        {paymentLink.link && <div onClick={clear} className="fixed h-full w-full top-0 left-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
            <div className="w-1/3 h-[10vh] bg-slate-200 flex items-center justify-center text-xl">
                <p>Click <a href={paymentLink.link} className="text-blue-700 underline mx-2">here</a> to make your payment</p>
            </div>
        </div>}
        {paymentLink.notice && <div onClick={clear} className="fixed h-full w-full top-0 left-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
            <div className=" bg-slate-200 flex items-center justify-center text-2xl font-bold p-5 rounded-lg">
                <p>{paymentLink.notice}</p>
            </div>
        </div>}
        {paymentLink.state && <div onClick={clear} className="fixed h-full w-full top-0 left-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
            <div className="w-40 h-40 border-y-2 rounded-full border-slate-200 animate-spin flex items-center justify-center text-xl">
                
            </div>
        </div>}
      <div className="flex  items-center justify-center gap-5 mt-10">
        <h1 className="px-5 py-3 text-2xl font-black bg-orange-600 w-32 rounded-xl -rotate-12 text-center">
          iTrack
        </h1>
        <p className="text-2xl font-black uppercase">
          - hosted payment gateway
        </p>
      </div>
      <form
      id="paymentForm"
        onSubmit={handleSubmit}
        className="w-2/3 mx-auto bg-red-20 my-10 py-10"
      >
        <div className="w-2/3 mx-auto bg-blue-40 space-y-5">
          <div className="flex flex-col">
            <label htmlFor="businessEmail" className="font-semibold text-2xl">
              Payment to whom:
            </label>
            <input
              required
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={paymentDetails.businessEmail}
              onChange={handleChange}
              className="bg-red-20 p-2 text-2xl border border-orange-500 rounded"
              placeholder="Enter Business/Company Name to pay to"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-2xl">
              Payment from whom:
            </label>
            <input
            required
            type="email"
            id="email"
              name="email"
              autoComplete="on"
              value={paymentDetails.email}
              onChange={handleChange}
              className="bg-red-20 p-2 text-2xl border border-orange-500 rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="invoiceNo" className="font-semibold text-2xl">
              Enter Invoice number:
            </label>
            <input
            required
            type="text"
            id="invoiceNo"
              name="invoiceNo"
              value={paymentDetails.invoiceNo}
              onChange={handleChange}
              className="bg-red-20 p-2 text-2xl border border-orange-500 rounded"
              placeholder="Enter Invoice ID"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="font-semibold text-2xl">
              Enter Amount:
            </label>
            <input
            required
            type="text"
            id="amount"
              name="amount"
              value={paymentDetails.amount}
              onChange={handleChange}
              className="bg-red-20 p-2 text-2xl border border-orange-500 rounded"
              placeholder="Enter amount to pay"
            />
          </div>
          <div className="w-2/3 mx-auto">
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-2xl rounded-lg text-white font-bold"
            >
              Make Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MakePayment;
