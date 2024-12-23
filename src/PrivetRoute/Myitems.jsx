import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useState } from 'react'
import axios from 'axios'

export default function Myitems() {

const {user,loading,setLoading} = useContext(AuthContext)
const [postsItems , setPostItmes] = useState([])

useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/allItems?email=${user?.email}`)
  .then(res=>{
  setLoading(false)
    setPostItmes(res.data)
  })
},[])

  return (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Your Posts</h2>

    {loading ? (
      <p>Loading your posts...</p>
    ) : postsItems.length === 0 ? (
      <p>You have not added any posts yet. Start adding items!</p>
    ) : (
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {postsItems.map((post) => (
            <tr key={post._id} className="border-b border-gray-300">
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.category}</td>
              <td className="border px-4 py-2">{post.location}</td>
              <td className="border px-4 py-2 flex justify-around">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleUpdate(post._id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  )
}
