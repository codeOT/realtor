import { NavLink } from 'react-router-dom'
import img from '../../assets/login.png'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function Signup() {
  return (
    <section className='mt-24'>
           <NavBar />
            <main className='max-w-[90%] mx-auto md:flex md:items-center md:px-14 mb-14'>
                <div className="max-w-[50%] mx-auto">
                    <img src={img} alt="login" />
                </div>
                <div className="mt-8">
                    <h1 className="text-3xl text-center mt-6 font-bold uppercase">Sign <span className='text-orange-600'>Up</span></h1>
                    <form action="" className='md:max-w-[70%] md:mx-auto mt-9 mb-24 md:mb-0'>
                        <label htmlFor="Username">
                            <input
                                required
                                type="text"
                                id='username'
                                placeholder='Enter username'
                                className="mb-6 w-full  focus:outline-orange-600 px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out" />
                        </label>
                        <label htmlFor="email">
                            <input
                            required
                                type="email"
                                id='email'
                                placeholder='Enter Email Address'
                                className="mb-6 w-full  focus:outline-orange-600 px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out" />
                        </label>
                        <label htmlFor="password">
                            <input
                            required
                                type="password"
                                id='password'
                                placeholder='password'
                                className="mb-6 w-full  focus:outline-orange-600 px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out" />
                        </label>
                        <div className=" md:flex md:justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-2 md:mb-6">
                                Already have an account?
                                <NavLink
                                    to="/Login"
                                    className="text-orange-600 hover:text-orange-700 transition duration-200 ease-in-out ml-1"
                                >
                                    Sign In
                                </NavLink>
                            </p>
                           
                        </div>
                        <button
                            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </section>
  )
}

export default Signup