import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import img from '../../assets/house-banner.png'
import { useFetch } from '../../components/hooks/4.1 useFetch'
import HouseList from '../../components/HouseList'
import About from '../../components/About'
import Footer from '../../components/Footer'
import {FaHome} from 'react-icons/fa'

function Home() {
    const {data, isPending, error} = useFetch('http://localhost:3000/houses')

    return (
        <section >
            <NavBar />

            <main className='max-w-[90%] mx-auto mt-28 md:h-[100vh] md:mt-0 md:flex md:items-center md:flex-row-reverse md:px-14 md:gap-5 '>
                <div className="img">
                    <img src={img} className='w-[500px] m-auto object-cover' alt="img" />
                </div>
                <div>
                <p className='mt-5 mb-3 text-center md:text-left'> <FaHome className='inline-block' /> House Rent Agency<span className='text-orange-600'>.</span></p>
                <h1 className='text-5xl text-slate-800 font-bold text-center  mb-10 md:text-left'><span className='text-orange-600'>Rent And Own</span> your dream house with us<span className='text-orange-600'>.</span></h1>
                <div className='text-center md:text-left'>
                <NavLink to='/Contact' className='bg-orange-600 text-white p-3 hover:bg-orange-400'>Make An Enquiry</NavLink>
                </div>
                </div>
            </main>
            <main className='mt-28'>
                {error && <p className='text-3xl text-bold text-center mt-5 text-orange-600'>{error}</p>}
                {isPending && <p className='text-3xl text-bold text-center mt-5 text-orange-600'> Loading...</p>}
                {data && <HouseList houses={data} /> }
            </main>
          <About />
          <Footer />
        </section>


    )
}

export default Home