import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

export default function AddLost_FoundITems() {

  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    postType: "Lost",
    thumbnail: null,
    title: "",
    description: "",
    category: "",
    location: "",
    dateLost: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateLost: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.title || !formData.description || !formData.category || !formData.location) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare data for submission
    const postData = {
      ...formData,
      dateLost: formData.dateLost.toISOString(),
      user: {
        displayName: user.displayName,
        email: user.email,
      },
    };

    try {
      // Assume API call for posting
      toast.success("Post added successfully!");
      setFormData({
        postType: "Lost",
        thumbnail: null,
        title: "",
        description: "",
        category: "",
        location: "",
        dateLost: new Date(),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add post. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Lost/Found Item</h2>
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

        {/* Thumbnail */}
        <label className="block mb-2 font-medium">Thumbnail (Image Upload)</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full mb-4"
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
          placeholder="e.g., pets, documents, gadgets"
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

        {/* Contact Info */}
        <div className="mb-4">
          <p className="font-medium">Contact Information:</p>
          <p className="text-gray-700">Name: {user?.displayName || "N/A"}</p>
          <p className="text-gray-700">Email: {user?.email || "N/A"}</p>
        </div>

        {/* Add Post Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Post
        </button>
      </form>
    </div>
  );
}
