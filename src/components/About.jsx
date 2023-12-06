import React from 'react'
import img from '../assets/houses/house10.png'

function About() {
  return (
    <section className='bg-orange-400 md:flex md:items-center' id='about'>
      <div className="w-[100%] p-8 m-auto md:w-[50%] md:m-0">
        <img className='rounded-3xl w-full h-[45vh] text-center object-cover' src={img} alt="" />
      </div>
      <div className="mt-4 p-8 md:w-[50%]">
        <h1 className='text-1xl text-white'>ABOUT <span >US</span></h1>
        <p className='text-4xl capitalize text-white'>
          The leading realtor marketplace
        </p>
        <p className='text-white mt-7 border-l-4 p-5 mb-9'> Over 1,000 people work for us in more than 5 countries all over this breadth of global coverage, combined with specialist services</p>
        
        <a href="#" className='bg-gray-800 text-white p-4 px-9 hover:bg-gray-600 '>OUR SERVICES</a>
      </div>
     
    </section>
  )
}

export default About