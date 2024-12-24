import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAxiosSecure, { axiosSecure } from "../Hooks/UserAxiosSecure";

const LostofItems = () => {
  const axiosSecure = UserAxiosSecure()
  const [items, setItems] = useState([]);

  // Data Fetch
  useEffect(() => {
    axiosSecure
      .get(`/allItems`)
      .then((res) => setItems(res.data))
      .catch((error) => console.error("Failed to fetch items:", error));
  }, []);

  // No items
  if (items.length === 0) {
    return <div className="text-center mt-10">No items found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-6">Lost & Found Items</h2>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {items.map((item) => (
          <div key={item._id} className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={item.thumbnail}
                alt="thumbnail" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-xl text-gray-600">Location: {item.location}</p>
              <p className="text-xl text-gray-600">
                Date: {new Date(item.dateLost).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/details/${item._id}`}
                >
                  <button className="btn bg-purple-600 text-white ">Details</button>
                </Link>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default LostofItems;

