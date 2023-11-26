import React, { useEffect, useState } from 'react'

function Loading({navBarState="expand"}) {
  const [expand, setExpand] = useState(true)
  
  useEffect(()=>{
    let pathName = window.location.pathname
    if (pathName === "/") {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }, [])
 
  return (
    <div>
       { expand ?
      <div className={`fixed z-10 top-0 left-0 right-0 h-full bg-slate-100 bg-opacity-100 flex items-center justify-center xl:top-0 ${navBarState === "expand" ? "xl:left-0 " : "xl:left-0"}`}>
        <div className={`w-2/3 mx-auto xl:w-1/3`}>
            <div>
                <p className='bg-orange-500 text-4xl xl:text-5xl text-center font-bold font-mono rounded-md p-2 xl:py-5 xl:px-3 xl:p-0 animate-pulse xl:text-black'>iTrack</p>
            </div>
        </div>
    </div> :
    <div className={`fixed z-10 top-0 left-0 right-0 h-full bg-slate-100 bg-opacity-100 flex items-center justify-center xl:top-28 ${navBarState === "expand" ? "xl:left-[20%] " : "xl:left-[5%]"}`}>
        <div className={`w-2/3 mx-auto xl:w-1/3`}>
            <div>
                <p className='bg-orange-500 text-4xl xl:text-5xl text-center font-bold font-mono rounded-md p-2 xl:py-5 xl:px-3 xl:p-0 animate-pulse xl:text-black'>iTrack</p>
            </div>
        </div>
    </div>
   }
    </div>
   
    
  )
}

export default Loading
