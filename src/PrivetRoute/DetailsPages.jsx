import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPages() {

const {id} = useParams()
console.log(id)

const [item,setItem] = useState([])
const [modalOpen , setmodalOpen] = useState([])




// axios data get 
useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`)
  .then(res=>{
    
    setItem(res.data)
    console.log(item)
  })
  
},[])






  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-10">

    <div className="relative">
      <img
        className="w-full h-[250px] lg:h-[550px] object-cover" 
        src={item.thumbnail}
        alt={item.title}
      />
      <div className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {item.postType === "Lost" ? "Lost Item" : "Found Item"}
      </div>
    </div>


    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
      <p className="text-gray-600 text-xl font-semibold mb-4">{item.description}</p>
      <div className=" gap-4  text-black">
        <p>
          <span className="font-semibold ">
            <span className='text-xl font-bold'>Location</span>:
            </span> <span className='text-[18px]'>{item.location}</span>
        </p>
        <p>
          <span className="font-semibold ">
            <span className='text-xl font-bold'>Category</span>:
            </span> <span className='text-[18px]'>{item.category}</span>
        </p>
        <p>
          <span className="font-semibold ">
            <span className='text-xl font-bold'>Posted By</span>:
            </span> <span className='text-[18px]'>{item?.user?.displayName} ({item?.user?.email})</span>
        </p>

      </div>
    </div>

    <div className="p-6 bg-gray-50 flex justify-end">
      <button
        // onClick={handleButtonClick}
        className="btn bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg transition-all duration-200"
      >
        {item.postType === "Lost" ? "Found This!" : "This is Mine!"}
      </button>
    </div>
  </div>
  )
}
