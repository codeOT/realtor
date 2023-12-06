// import { useParams } from 'react-router-dom'
// import { useFetch } from '../../components/hooks/4.1 useFetch'
import { FaAddressBook, FaPhoneAlt } from 'react-icons/fa'
import agent from '../../assets/agents/agent5.png'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'


function Contact() {

    // const { id } = useParams()
    // const url = 'http://localhost:3000/houses/' + id
    // const { data: house } = useFetch(url)

    return (
        <section>
            <NavBar />
            <main className='mt-28'>
                <div className='md:m-auto md:w-[40%] mt-9 md:mt-0 border  shadow-2xl'>
                    <div className='p-9 '>
                        <div className='flex items-center gap-7'>
                            <img src={agent} alt="" className='h-20' />
                            <div>
                                <h2 className='font-bold text-2xl text-orange-600'>Agent Name</h2>
                                <div className='font-bold'>
                                    <h2><FaAddressBook className='inline-block mr-3' />Ishola Abdulganiyu</h2>
                                    <h2><FaPhoneAlt className='inline-block mr-2' /> 000000000</h2>
                                </div>

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
            </main>

            <Footer />
        </section>
    )
}

export default Contact