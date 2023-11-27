import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import itrack_logo from '../images/itrack_logo.png'

function Home() {
    const [load, setLoad] = useState(true)
    useEffect(()=> {
        setTimeout(() => {
            setLoad(false)
        }, 3000);
    }, [])
    const navigate = useNavigate()
  return (
    <div>
        { load && <Loading />}
        <header className='fixed top-0 left-0 w-full flex justify-start gap-5 items-center px-5 py-5 bg-white bg-opacity-80'>
            {/* logo */}
            <div className='flex items-center justify-center bg-blue-30 w-14 h-14'>
                <img src={itrack_logo} />
            </div>
            <nav className='bg-red-30 w-20'>
                <p className='font-bold text-3xl'>iTrack</p>
                
            </nav>
        </header>
        

        <div className='pt-32 bg-red-20 h-[70rem] '>
            <div className='px-4' >
                <p className='text-orange-500 font-serif text-4xl font-bold'>Record and keep track of</p>
                <p className='text-black font-serif text-2xl font-bold'>all issued invoices</p>
                <div className='font-light text-base mt-5'>
                    <p>As a business owner, take control and keep track of all issued invoices - paid or unpaid.</p>
                    <p>No more unaccounted sales and unsolicited payments. Watch where and how your money moves by tracking issued invoices.</p>
                </div>
               
            </div>

            <div className='bg-red-30 my-10 px-4 xl:w-2/3'>
                <button onClick={()=> navigate("/log-in")} className='w-full text-2xl bg-gray-950 p-3 rounded-md text-slate-100 hover:bg-green-600 active:bg-green-800'>Create an account</button>
            </div>

            <div className='px-4 xl:w-2/3'>
                <div className='w-full h-52 bg-slate-200'>

                </div>
            </div>

            <div className='my-10 px-4'>
                <p className='font-light text-base'>Receive money linked to an invoice from anywhere and with any means</p>
                <div className='mt-5 flex justify-start gap-10 items-center'>
                    <div className='flex items-center flex-col'>
                        <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
                        <p>Card</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
                        <p>USSD</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
                        <p>Bank</p>
                    </div>
                </div>
            </div>

            <div className='px-4 py-10 bg-black xl:w-2/3'>
                <div className='text-white text-center font-normal'>
                    <p className='text-2xl'>A one for all solution </p>
                    <p className='text-lg'>to keep you in <span className='text-red-500 font-serif'>power</span></p>
                </div>

                <p className='text-slate-100 font-light my-8 text-center'>iTrack offers eye-catching and intuitive services to help keep and manage your business payments</p>

                <div className='space-y-7'>
                    <div className='bg-[#2F2F2F] p-5 rounded-2xl space-y-3'>
                        <p className='font-semibold text-white'>Create a customer profile</p>
                        <p className='text-slate-200 font-light text-sm leading-6'>e the Installation page for additional docs about how to make sure everything is set up correctly.
                            Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        </p>
                    </div>
                    <div className='bg-[#2F2F2F] p-5 rounded-2xl space-y-3'>
                        <p className='font-semibold text-white'>Generate invoices</p>
                        <p className='text-slate-200 font-light text-sm leading-6'>e the Installation page for additional docs about how to make sure everything is set up correctly.
                            Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        </p>
                    </div>
                    <div className='bg-[#2F2F2F] p-5 rounded-2xl space-y-3'>
                        <p className='font-semibold text-white'>Keep track of a customer invoice status</p>
                        <p className='text-slate-200 font-light text-sm leading-6'>e the Installation page for additional docs about how to make sure everything is set up correctly.
                            Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-10 my-10 space-y-5 rounded-xl p-5 bg-zinc-950 xl:w-1/3'>
                <p className='text-2xl font-bold text-white'>Ready to get started?</p>
                <p className='text-slate-200 font-light'>Create an account now and get free access to all of our products and services.<br/>Our tool, your power.</p>
                <div className='bg-red-30 my-10'>
                    <button className=' bg-slate-200 p-3 rounded-md text-slate-900 font-semibold text-sm'>Get started</button>
                </div>
            </div>

            <div>
                <div className='bg-red-20 py-20'>
                    <details className='bg-slate-10 accent-slate-50 border-b border-red-300'>
                        <summary className='list-none'>Products</summary>
                        <p>jkd</p>
                    </details>
                    
                </div>
    
            </div>
            
        </div>
    </div>
  )
}

export default Home;
