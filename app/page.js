"use client"


import { useRouter } from 'next/navigation'

import React from 'react'
import { Link } from "next/link"
import { useMediaQuery} from "react-responsive"
import { Container } from 'postcss'


const page = () => {
 const router = useRouter();
  const handleSubmit = () =>{
    router.push("/Home");

  }

  //react-responsive

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className='px-1 bg-slate-100'>
       <h1 className='m-6 font-extrabold text-6xl text-yellow-400 inline-flex'>OCTOPODS</h1>
       <h1 className='inline-flex px-2 py-3 font-extrabold text-4xl bg-slate-400 m-6  '>SEARCH</h1>
       <button className='px-2 py-3 text-right inline-flex font-extrabold text-4xl bg-slate-400 rounded-full m-6' >Connect Wallet</button>
       
      
       
       
       <button className='text-5xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex-2 m-6' onClick={handleSubmit}>SIGN IN TO ENTER THE POOL</button>
       <h1 className='px-2 py-48 bg-slate-400 rounded-s-2xl m-6 container text-6xl font-extrabold' >NFT Marketplace For OCTOPODS</h1>
       
        
       

       
    </div>
  )
}

export default page





