import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Myitems() {
  const {id} = useParams()

  const { user, loading, setLoading } = useContext(AuthContext)
  const [postsItems, setPostItmes] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allItems?email=${user?.email}`)
      .then(res => {
        setLoading(false)
        setPostItmes(res.data)
      })
  }, [])

// delate post item
const handleDelete= async (_id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "Your Lost Or Found Items!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async(result) => {
    if (result.isConfirmed) {
      console.log(_id)
     try{
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/items/${_id}`)
     
      if (res.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });

        const updatepost = postsItems.filter(post=>post._id !== _id)
        setPostItmes(updatepost)

      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the post.",
          icon: "error",
        });
      }
    } 
    catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.res?.data?.message || "An unexpected error occurred.",
        icon: "error",
      });
      console.error("Error deleting item:", error);
    }
  }
      
})



}






  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My  Posts</h2>

      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
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
                  <Link to={`/updatePost/${post._id}`}>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleUpdate(post._id)}
                    >
                      Update
                    </button>
                  </Link>
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
