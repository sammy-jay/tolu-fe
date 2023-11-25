import React from 'react'

function MakePayment() {
  return (
    <div>
        <div className='flex  items-center justify-center gap-5 mt-10'>
            <h1 className='px-5 py-3 text-2xl font-black bg-orange-600 w-32 rounded-xl -rotate-12 text-center'>iTrack</h1>
            <p className='text-2xl font-black uppercase'>- hosted payment gateway</p>
        </div>
        <form className='w-2/3 mx-auto bg-red-20 my-10 py-10'>
            <div className='w-2/3 mx-auto bg-blue-40 space-y-5'>
                <div className='flex flex-col'>
                    <label htmlFor='businessName' className='font-semibold text-2xl'>Payment to whom:</label>
                    <input name="businessName" className='bg-red-20 p-2 text-2xl border border-orange-500 rounded' placeholder='Enter Business/Company Name to pay to' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='businessName' className='font-semibold text-2xl'>Payment from whom:</label>
                    <input name="businessName" className='bg-red-20 p-2 text-2xl border border-orange-500 rounded' placeholder='Enter your email address' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='businessName' className='font-semibold text-2xl'>Enter Invoice Id:</label>
                    <input name="businessName" className='bg-red-20 p-2 text-2xl border border-orange-500 rounded' placeholder='Enter Invoice ID' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='businessName' className='font-semibold text-2xl'>Enter Amount:</label>
                    <input name="businessName" className='bg-red-20 p-2 text-2xl border border-orange-500 rounded' placeholder='Enter amount to pay' />
                </div>
                <div className='w-2/3 mx-auto'>
                    <button className='w-full p-3 bg-green-500 text-2xl rounded-lg text-white font-bold'>Make Payment</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default MakePayment
