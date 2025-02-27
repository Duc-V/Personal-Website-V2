import React from 'react'
import Image from "next/image";
import icon from "./images/mail.svg"
const Footer = () => {
  return (
    <footer className='mx-4 mt-32 font-Inter text-center font-[500] rounded-3xl bg-[#f5f5f5] flex items-center justify-center'>
        <div className='my-10 text-lg'>
            <Image
                src = {icon}
                alt = "mail icon"
                className='h-8 w-auto inline mr-1'
            />
            <a href="ducvupprrt@gmail.com"><span>ducvupprrt@gmail.com</span></a>
        </div>
        <hr className=''/>
    </footer>
  )
}

export default Footer