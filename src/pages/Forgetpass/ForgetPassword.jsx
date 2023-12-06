import { NavLink } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import img from '../../assets/login.png'

function ForgetPassword() {
  return (
    <section className='mt-24' >
        <NavBar />
        <main className='max-w-[90%] mx-auto md:flex justify-center md:items-center md:px-14'>
                <div className="max-w-[100%]">
                    <img src={img} alt="login" />
                </div>
                <div className="mt-8">
                    <h1 className="text-3xl text-center mt-6 font-bold uppercase">forget<span className='text-orange-600'> password</span></h1>
                    <form action="" className='mt-9 mb-24 md:mb-0' >
                        <label htmlFor="email">
                            <input
                                required
                                type="email"
                                id='email'
                                placeholder='Enter Email Address'
                                className="mb-6 w-[100%]  focus:outline-orange-600  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out" />
                        </label>
                        
                        <div className=" md:flex md:justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-2 md:mb-6">
                                Sign in instead?
                                <NavLink
                                    to="/Login"
                                    className="text-orange-600 hover:text-orange-700 transition duration-200 ease-in-out ml-1"
                                >
                                    Sign in
                                </NavLink>
                            </p>
                           
                        </div>
                        <button
                            className="w-full  bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                            type="submit"
                        >
                            Reset Password
                        </button>
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            
                        </div>
                    </form>
                </div>
            </main>
    </section>
  )
}

export default ForgetPassword