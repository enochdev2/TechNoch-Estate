import React from 'react'
import hero from '../../assets/hero-img.jpg'


export default function About() {
  return (
    <div className='py-10 px-4 sm:max-w-6xl w-full overflow-x-hidden mx-auto'>
       <div className='h-96 w-full overflow-hidden mt-2'>
        <img src={hero} alt="hero" className='h-full w-full' />
      </div>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About TechNoch Estate</h1>
      <p className='mb-4 text-slate-700 text-xl'>TechNoch Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-xl text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-xl  text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
  )
}
