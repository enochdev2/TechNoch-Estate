import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-full px-2 py-0 bg-[#f8f8f8]'>
            <div className='text-center w-full justify-center flex'>
                <FaFacebook className='text-2xl font-bold mx-4 my-12 text-[#5651e5] m-4' />
                <FaInstagram className='text-2xl mx-4 my-12 text-[#5651e5] m-4' />
                <FaTwitter className='font-bold text-2xl mx-4 my-12 text-[#5651e5] m-4' />
                <FaPinterest className='font-bold text-2xl mx-4 my-12 text-[#5651e5] m-4' />
            </div>
            <div className='grid grid-cols-4 md:grid-cols-4 md:gap-10 gap-3'>
                <div className='m-auto'>
                    <h3 className='mx-3 my-3 underline font-bold '>About</h3>
                    <p className='mx-2 my-0'>Company</p>
                    <p className='mx-2 my-0'>Details</p>
                    <p className='mx-2 my-0'>Planning</p>
                    <p className='mx-2 my-0'>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3 className='mx-3 my-3 underline font-bold '>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3 className='mx-3 my-3 underline font-bold '>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3 className='mx-3 my-3 underline font-bold '>Information</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
