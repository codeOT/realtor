import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className='relative z-10'>
        <nav className='bg-white mx-auto flex justify-between items-center py-5 px-10 fixed top-0 left-0 right-0 '>
        <div className="logo">
            <NavLink to='/'> <h1 className='text-3xl'>Housify.</h1></NavLink>
        </div>
        <div className="hidden md:flex md:items-center md:gap-5">
        <NavLink  to='/' className='text-1xl focus:text-orange-600 hover:scale-125 p-2 transition focus:border-orange-600 focus:border-b-4'> Home </NavLink>
        {/* <NavLink to='/About' className='text-1xl focus:text-orange-600 hover:scale-125 p-2 transition  focus:border-orange-600 focus:border-b-4'>About</NavLink>   */}
        <a href='#about' className='text-1xl focus:text-orange-600 hover:scale-125 p-2 transition  focus:border-orange-600 focus:border-b-4'>About</a>  
        <NavLink  to='/Contact' className='text-1xl focus:text-orange-600 hover:scale-125 p-2 transition focus:border-orange-600 focus:border-b-4'> Contact </NavLink>
        <NavLink to='/AddHome' className='text-1xl p-3 bg-orange-600 text-white hover:bg-orange-400' > Add Home</NavLink>
        {/* <NavLink to='/Login' className='text-2xl focus:text-orange-600 hover:scale-125 p-2 transition  focus:border-orange-600 focus:border-b-4'>Login</NavLink> */}
        {/* <NavLink to='/Login' className='text-1xl bg-orange-600 p-2 text-white rounded-lg  hover:bg-orange-400 '>Sign In</NavLink> */}
        </div>
        <div className='text-1xl flex items-center gap-5 md:hidden'>
            <NavLink to='/Contact' className=' hover:text-orange-600'>Contact Agent</NavLink>
            {/* <NavLink to='/Login' className=' focus:text-orange-600 bg-orange-600 p-2 text-white rounded-lg  hover:bg-orange-400'>SignUp</NavLink> */}
        </div>
    </nav>
    </header>
  )
}

export default NavBar