import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-full px-8 py-0 bg-[#f8f8f8]'>
            <div className='text-center flex'>
                <FaFacebook className='font-8 mx-8 my-12 text-[#5651e5] m-4' />
                <FaInstagram className='font-8 mx-8 my-12 text-[#5651e5] m-4' />
                <FaTwitter className='font-8 mx-8 my-12 text-[#5651e5] m-4' />
                <FaPinterest className='font-8 mx-8 my-12 text-[#5651e5] m-4' />
            </div>
            <div className='grid grid-cols-4 md:grid-cols-2 md:gap-20 gap-5'>
                <div className='m-auto'>
                    <h3 className='mx-3 my-0 '>About</h3>
                    <p className='mx-2 my-0'>Company</p>
                    <p className='mx-2 my-0'>Details</p>
                    <p className='mx-2 my-0'>Planning</p>
                    <p className='mx-2 my-0'>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='m-auto'>
                    <h3>Information</h3>
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
