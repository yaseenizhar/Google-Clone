import Link from 'next/link';
import React from 'react'
import {CgMenuGridO} from "react-icons/cg"

 function Header(){

  const handleRedirect = () => {
    // Redirect to google/Sign in
    window.location.href = 'https://shorturl.at/hCEV8';
  };

  return (
    <div className='flex justify-end p-3 pr-5 text-sm items-center space-x-5 mx-2 my-0.2'>
        <Link href= "https://mail.google.com/mail/u/0/?ogbl" className='hover:underline'>
            Gmail
        </Link>

        <Link href= "https://www.google.com/imghp?hl=en&authuser=0&ogbl" className='hover:underline'>
            Images
        </Link>
        <CgMenuGridO className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2  cursor-pointer ...'/>
        
        <button onClick={handleRedirect}
         className= 'bg-colours text-white px-7 py-2 rounded hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
        
    </div>
  )
}

export default Header;