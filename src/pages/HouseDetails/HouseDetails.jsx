import Footer from '../../components/Footer'
import house1 from '../../assets/houses/house1.png'
import house2 from '../../assets/houses/house2.png'
import house3 from '../../assets/houses/house3.png'
import house4 from '../../assets/houses/house4.png'
import house5 from '../../assets/houses/house1.png'
import agent from '../../assets/agents/agent5.png'
import NavBar from '../../components/NavBar'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../components/hooks/4.1 useFetch'
import { FaAddressBook, FaBed, FaPhoneAlt } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HouseDetails.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


function HouseDetails() {
  const { id } = useParams()
  const url = 'http://localhost:3000/houses/' + id
  const { error, isPending, data: house } = useFetch(url)

  return (
    <section>
      <NavBar />
      <main className='mt-24 '>
        {error && <p className='text-3xl text-bold text-center mt-5 mb-10 text-orange-600'>{error}</p>}
        {isPending && <p className='text-3xl text-bold text-center mt-5 mb-10 text-orange-600'>Loading...</p>}
      </main>
      <main className='max-w-[90%] mx-auto my-5'>
        {house && <div className='md:flex md:items-center md:justify-between'>
          <div>
            <h1 className='text-3xl text-orange-600'>{house.name}</h1>
            <h2 className='font-bold'>{house.address}</h2>
          </div>
          <div className='md:flex items-center gap-5'>
            <h2><span className='md:hidden'>House type: </span><span className='font-bold md:bg-orange-600 md:text-white md:text-sm md:p-2 md:rounded-full'>{house.type}</span></h2>
            <h2><span className='md:hidden'>Address:</span> <span className='font-bold  md:bg-gray-600 md:text-white md:text-sm md:p-2 md:rounded-full'>{house.country}</span></h2>
          </div>
          <div className='font-bold'>
            <h1 className='text-3xl mt-6 md:mt-0 text-orange-600'>{house.price}</h1>
          </div>
        </div>}
        <div className='mt-5 md:flex md:gap-9'>
          <div className='md:w-[60%]'>

            <>
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='mySwiper'
              >
                <SwiperSlide><img src={house1} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={house2} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide> <img src={house3} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={house4} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={house5} alt="" srcset="" /></SwiperSlide>
              </Swiper>
            </>


            {/* <img src={image} className='' alt="" /> */}
            {house &&
              <div className="flex gap-7 mt-4 mb-3 font-bold text-orange-600">
                <h2>{house.bedrooms} <FaBed className='inline-block' /></h2>
                <h2>{house.bathrooms} <FaBath className='inline-block' /></h2>
                <h2><BiArea className='inline-block' />{house.surface} </h2>
              </div>}
            {house && <div className=''>
              <p>{house.description}</p>
            </div>}





          </div>

          <div className='md:w-[40%] mt-9 md:mt-0 border  shadow-2xl'>
            <div className='p-9 '>
              <div className='flex items-center gap-7'>
                <img src={agent} alt="" className='h-20' />
                <div>
                  <h2 className='font-bold text-2xl text-orange-600'>Agent Name</h2>
                  {house && <div className='font-bold'>
                    <h2><FaAddressBook className='inline-block mr-3' />Ishola Abdulganiyu</h2>
                    <h2><FaPhoneAlt className='inline-block mr-2' /> 000000000</h2>
                  </div>}

                </div>
              </div>
              <form action="" className='mt-12'>
                <input type="text" className='w-full h-[9vh] pl-4 text-1xl focus:outline-orange-600' placeholder='Name*' required />
                <input type="email" className='w-full h-[9vh] pl-4 text-1xl mt-6 focus:outline-orange-600' placeholder='Email*' required />
                <input type="tel" className='w-full h-[9vh] pl-4 text-1xl mt-6 focus:outline-orange-600' placeholder='Number*' required />
                <textarea name="" id="" className='w-full h-[20vh] mt-9 pl-4 pt-4 resize-none text-1xl focus:outline-orange-600' placeholder='Hello, I am interested in [Modern apartment]*' required></textarea>
                <div className='mt-5 flex w-full gap-10'>
                  <button className='p-4  bg-orange-600 text-white border-orange-600 w-[45%] hover:bg-orange-400'>Send Message</button>
                  <button className='p-4  bg-orange-600 text-white border-orange-600 w-[45%] hover:bg-orange-400'>Call Agent</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default HouseDetails