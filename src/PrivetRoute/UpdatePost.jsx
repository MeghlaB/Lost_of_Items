import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";

export default function UpdatePost() {
    const axiosSecure = UserAxiosSecure()
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const updateData = useLoaderData();
// console.log(updateData)

  const { _id, thumbnail, title, description, category, location, dateLost, type } = updateData;
  // console.log(_id)

  const [formData, setFormData] = useState({
    postType: type || "Lost", 
    thumbnail: thumbnail || "",
    title: title || "",
    description: description || "",
    category: category || "",
    location: location || "",
    userName: user?.displayName || "", 
    userEmail: user?.email || "", 
    dateLost: dateLost ? new Date(dateLost) : new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateLost: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { 
      ...formData, 
      dateLost: formData.dateLost.toISOString(), 
      user: { 
        displayName: user?.displayName, 
        email: user?.email, 
        image: user?.photoURL 
      } 
    };

    try {
      // Use axios to send the data to the server
      const response = await axiosSecure.put(
        `/items/${_id}`,
        updatedPost,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Post updated successfully!",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/myItems");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire({
        title: "Failed!",
        text: "Post update failed. Please try again!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Update Lost/Found Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Post Type */}
        <label className="block mb-2 font-medium">Post Type</label>
        <select
          name="postType"
          value={formData.postType}
          onChange={handleInputChange}
          className="select select-bordered w-full mb-4"
        >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        {/* Thumbnail URL */}
        <label className="block mb-2 font-medium">Thumbnail (Image URL)</label>
        <input
          type="url"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          className="input input-bordered w-full mb-4"
          required
        />

        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter title"
          className="input input-bordered w-full mb-4"
          required
        />

        {/* Description */}
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter description"
          className="textarea textarea-bordered w-full mb-4"
          required
        />

        {/* Category */}
        <label className="block mb-2 font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="e.g. pets, documents, gadgets"
          className="input input-bordered w-full mb-4"
          required
        />

        {/* Location */}
        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Where the item was lost/found"
          className="input input-bordered w-full mb-4"
          required
        />

        {/* Date Lost */}
        <label className="block mb-2 font-medium">Date Lost/Found</label>
        <DatePicker
          selected={formData.dateLost}
          onChange={handleDateChange}
          className="input input-bordered w-full mb-4"
        />
 {/* User Email (Read Only) */}
 <label className="block mb-2 font-medium">User Email</label>
    <input
      type="email"
      name="userEmail"
      value={formData.userEmail} 
      className="input input-bordered w-full mb-4"
      readOnly
    />

    {/* User Name (Read Only) */}
    <label className="block mb-2 font-medium">User Name</label>
    <input
      type="text"
      name="userName"
      value={formData.userName} 
      className="input input-bordered w-full mb-4"
      readOnly
    />

        {/* Add Post Button */}
        <button type="submit" className="btn btn-primary w-full">
          Update Post
        </button>
      </form>
    </div>
  );
}
