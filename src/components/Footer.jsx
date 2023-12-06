import { NavLink } from 'react-router-dom'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


function Footer() {
  return (
    <footer className=' bg-gray-800 text-white '>
      <div className='max-w-[90%] mx-auto pt-9 pb-9 md:flex justify-between items-center'>
        <div>
          <h1 className='text-3xl my-4'>Housify.</h1>
          <p className='md:w-[80%]'>Over 1000 people work for us in more than 5 countries all over the
            world..
          </p>
          <div>
            <p><FaLocationArrow className='inline-block mr-3' />Lagos, Nigeria.</p>
            <p><FaPhoneAlt className='inline-block mr-3' />+234-905-896-7999</p>
            <p><MdEmail className='inline-block mr-3' />toheeboni@gmail.com</p>
          </div>
        </div>
        <div className='mt-7'>
          <h1 className='text-3xl'>Company</h1>
          <NavLink className=''>About</NavLink>
          <NavLink className='block'>All Products</NavLink>
          <NavLink className='block'>Contact us</NavLink>
          <NavLink className='block'>Terms and Conditions</NavLink>
        </div>
        <div className='mt-7'>
          <h1 className='text-3xl'>Customer care</h1>
          <NavLink className='block'>My Account</NavLink>
          <NavLink to='/Login' className='block'>Admin Sign In</NavLink>
          <NavLink className='block'>Contact us</NavLink>
          <NavLink className='block'>FAQ</NavLink>
        </div>
      </div>
      <p className='text-center'>&copy; 2022 <a href="#">made by CodeOT</a> All Right Reseverved.</p>
    </footer>
  )
}

export default Footer