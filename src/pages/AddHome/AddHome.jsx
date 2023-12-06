import { useState } from "react"
import { useFetch } from "../../components/hooks/4.1 useFetch"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"


function AddHome() {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState('')
  const [country, setCountry] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [surface, setSurface] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const { postData, data, error} = useFetch('http://localhost:3000/houses', 'POST')

  const handleSubmit = (e) =>{
    e.preventDefault()

    postData({name,address,type,country,bedrooms,bathrooms,surface,price,description})
  }

  return (
    <section>
      <NavBar />
      <main className="mt-32">

        <div className="text-center">
          <h2 className="text-2xl text-orange-600 font-bold"> Add New Home</h2>
        </div>

        <form className="text-xl block w-[80%] md:w-[40%] m-auto" onSubmit={handleSubmit}>

        {/* <label className="block mt-7">
            <span className="block text-left">House image: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="image"
              required
            />
          </label> */}

          <label className="block mt-7">
            <span className="block text-left">House type: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
              placeholder='House type*'
              required
            />
          </label>

          <label className="block mt-7">
            <span className="block text-left">House Name: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Name*'
              required
            />
          </label>

          <label className="block mt-7">
            <span className="block text-left">House Address: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder='Address*'
              required
            />
          </label>
          <label className="block mt-7">
            <span className="block text-left">House Country: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              placeholder='Country*'
              required
            />
          </label>

          <label className="block mt-7">
            <span className="block text-left">Bedrooms: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="number"
              onChange={(e) => setBedrooms(e.target.value)}
              value={bedrooms}
              placeholder='Bedrooms*'
              required
            />
          </label>

          <label className="block mt-7">
            <span className="block text-left">Bathrooms: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="number"
              onChange={(e) => setBathrooms(e.target.value)}
              value={bathrooms}
              placeholder='Bathrooms*'
              required
            />
          </label>

          <label className="block mt-7">
            <span className="block text-left">surface: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setSurface(e.target.value)}
              value={surface}
              placeholder='Suface*'
              required
            />
          </label>

          <label className="flex flex-col mt-7">
            <span className="block text-left">House Description:</span>
           <div>
             <textarea 
            cols="20" 
            rows="6"
            className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400 resize-none"
            onChange={ (e) => setDescription(e.target.value)}
            value={description}
            placeholder='Description*'
            required
            />
           </div>
          </label>
    
          <label className="block mt-7">
            <span className="block text-left">House Price: </span>
            <input
              className="w-full p-2 pl-3 focus:outline-orange-600 border border-orange-400"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder='Price*'
              required
            />
          </label>

            <button className="mt-9 mb-9 p-2 px-7 bg-orange-600 text-white hover:bg-orange-400">Submit</button>

        </form>

      </main>
      <Footer />
    </section>
  )
}

export default AddHome