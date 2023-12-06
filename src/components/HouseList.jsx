import { NavLink } from 'react-router-dom'
import image from '../assets/houses/house1.png'
import { FaHome } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'
import { BiDetail } from 'react-icons/bi'


import "./HouseList.css"
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'

function HouseList() {

    const [ items, setItems ]= useState([])
    const [ pageCount, setPageCount ] = useState(0)

    let limit = 3;

    useEffect(()=>{
        const getHouses = async () =>{
            const res = await fetch(`http://localhost:3000/houses?_page=1&_limit=${limit}`);
            const data = await res.json();
            const total = res.headers.get('x-total-count')
            setPageCount(Math.ceil(total/limit))
            setItems(data)
        };
        getHouses();
    },[])

    const fetchHouses = async (currentPage) =>{
        const res = await fetch(`http://localhost:3000/houses?_page=${currentPage}&_limit=${limit}`)
        const data = await res.json()
        return data;
    }

    console.log(items)

    const handlePageClick = async (data) => {
        console.log(data.selected)
        let currentPage = data.selected + 1

        const currentFormServer = await fetchHouses(currentPage);

        setItems(currentFormServer)
    }

    return (
        <section className='max-w-[90%] mx-auto'>
            <p className='text-orange-600 text-center'>Available properties</p>
            <h1 className='text-3xl md:text-4xl text-center'>Featured Listings</h1>
            <div className="mt-8 mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map(house => (
                    <div key={house.id} className='bg-slate-100 shadow-xl rounded-t-3xl'>
                        <img src={image} alt="img" className='w-full h-[50vh] object-cover rounded-t-3xl' />
                        <div className="p-5">
                            <div className="flex gap-6 mb-5">
                                <h2 className='bg-orange-600 text-white text-sm p-2 rounded-full'><span className='flex items-center gap-1'><FaHome /> {house.type}</span></h2>
                                <h2 className='bg-gray-600 text-white text-sm p-2 rounded-full'><span className='flex items-center gap-1'><FaLocationArrow />{house.country}</span></h2>
                            </div>
                            <div className=''><FaAddressBook className='inline-block mr-3' />{house.address}</div>
                            <div className="flex gap-5 mt-3 mb-2">
                                <h2>{house.bedrooms} <FaBed className='inline-block' /></h2>
                                <h2>{house.bathrooms} <FaBath className='inline-block' /></h2>
                                <h2><BiArea className='inline-block' />{house.surface} </h2>
                            </div>
                            <div>
                                <p><BiDetail className='inline-block mr-2' />{house.description.substring(0, 36)}...</p>
                            </div>
                            <span className='block text-center mt-6 mb-5'>
                                <NavLink className='text-1xl bg-orange-600 text-center py-3 px-10 rounded-xl text-white hover:bg-orange-400 ' to={`/houses/${house.id}`}>View</NavLink>
                            </span>
                        </div>
                    </div>

                ))}
            </div>

            <ReactPaginate
             previousLabel={'Previous'}
             nextLabel={'Next'}
             breakLabel={'...'}
             pageCount={pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={3}
             onPageChange={handlePageClick}
             containerClassName={'pagination'}
             pageClassName={'page-item'}
             previousClassName={'page-item'}
             nextClassName={'page-item'}
             breakClassName={'page-item'}
             activeClassName={'active'}
            />
        </section>
    )
}

export default HouseList