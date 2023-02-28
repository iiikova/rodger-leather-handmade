import React from 'react'
import logo from '../assets/images/logo.png';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <hr className=' bg-zinc-900 mt-3' />
            <div className='py-3 border-solid grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <div className='p-3  grid justify-center items-center'>
                    <img className='h-40' src={logo} alt="logo" />
                </div>
                <div className='p-3 leading-loose grid justify-center items-center'>
                    <h1 className='text-sm uppercase pb-3'>контакти</h1>
                    <p className='text-xs text-zinc-500'>lviv, ukraine</p>
                    <p className='text-xs text-zinc-500'><a href="tel:+4733378901">+47 333 78 901</a></p>
                    <p className='text-xs text-zinc-500'><a href="mailto:someone@yoursite.com">Email Us</a>  </p>
                    <div className='flex gap-3 pt-3 text-base'>
                        <FaFacebookSquare />
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <hr className=' bg-zinc-900 mt-3' />
            <div className='text-center p-6  '>
                <p className='text-2xl pb-2'>© 2023 Rodger's Leather Copyright Reserved</p>
                <p className=' text-zinc-500'>develop by: <a href="https://ikova.netlify.app">Ikova</a></p>
            </div>
        </>

    )
}

export default Footer
