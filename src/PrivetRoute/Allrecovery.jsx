import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import axios from 'axios'

export default function Allrecovery() {
const {user,loading,setLoading} = useContext(AuthContext)
const [recoveredItems , setIsRecovered] = useState([])

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/allrcoveries`)
    .then(res=>{
        setIsRecovered(res.data)
    })
},[])

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">All Recovered Items</h2>
      {recoveredItems.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          No recovered items found. You haven't recovered any items yet.
        </div>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Recovered Location</th>
              <th className="px-4 py-2">Recovered Date</th>
            </tr>
          </thead>
          <tbody>
            {recoveredItems.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.recoverLocation}</td>
                <td className="px-4 py-2">{new Date(item.recoveryDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
