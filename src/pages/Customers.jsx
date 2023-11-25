import React, { useEffect, useState } from 'react'



function Customers() {
    const [response, setResponse] = useState({
        id: "",
        link: ""
    });
    const [transactions, setTransactions] = useState("")

    useEffect(()=> {
        async function getUsers() {
            let response = await fetch("http://localhost:3000/itrack/check-transactions")
            let data = await response.json()
            // alert(JSON.stringify(data))
            setTransactions(data.transactions)
        }
        getUsers()
    }, [])


    let transact = { 
        seller: {
            name: "iTrack",
            email: "itrackg319@gmail.com",
            phone: "12345678912"
        },
        customer: {
            name: "ola",
            email: "elijahdimeji549@gmail.com",
            phone: "07037887923"
        },
        products: {
            cloth: {
                unitPrice: "1500",
                qty: "2"
            },
            trousers: {
                unitPrice: "900",
                qty: "5"
            },
            shoes: {
                unitPrice: "4000",
                qty: "2"
            },
        },
        amountTotal: "1501",
        discount: false,
        dateIssued: "21/11/2023",
        paidStatus: "unpaid",
        duePayDate: "28/11/2023"
    }
    async function sendJSON() {
        // alert("yes")
        let response = await fetch("http://localhost:3000/itrack/pay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transact)
        })
        if (response.status === 200){
            let data = await response.json()
            setResponse({id: "", link: data.message})
        } else if (response.status === 201) {
            let data = await response.json()
            // alert(JSON.stringify(data))
            setResponse({link: "", id: data.message})
        }
   
    }
   
  return (
    <div>
         <p>BE response: </p>
         { response.id && <div>{response.id}</div> }
         { response.link &&
           <div>
           <a href={response.link} className='text-blue-800 font-medium underline cursor-pointer'>Make Payment</a>
       </div>
         }
         
         
        <button onClick={sendJSON} className='w-2/3 p-2 bg-orange-500 text-black font-bold rounded-lg'>SEND JSON PAYLOAD</button>

        { transactions && 
        transactions.map((items, index) => { 
            return (
            <div className='flex justify-evenly'>
                <p>{index+1}</p>
               { items.invoiceId && <p>{items.invoiceId}</p> }  
               <p>{items.paidStatus}</p>
            </div> )
        })
        }
    </div>

  )
}

export default Customers
