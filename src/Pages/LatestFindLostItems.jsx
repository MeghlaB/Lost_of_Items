import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const LatestFindLostItems = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/allItems`)
            .then(res => {
                setItems(res.data)
            })
    }, [])
    const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

    const filteredItems = sortedItems.filter(
        item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );





    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-center text-2xl text-purple-600 font-bold mb-6">
                <Typewriter
                    words={['Lost & Found Items']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h2>

            {/* Search Input */}
            <div className="mb-6">
                <label className="input border-2 border-purple-600  input-bordered flex items-center gap-2">
                    <input type="text"
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="grow"
                     placeholder="Search by title or location..." />
                    <FaSearch />
                </label>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item._id} className="card card-compact bg-base-100 w-96 shadow-xl m-2">
                            <figure>
                                <img
                                    src={item.thumbnail}
                                    alt="thumbnail"
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="text-xl text-gray-600">Location: {item.location}</p>
                                <p className="text-xl text-gray-600">
                                    Date: {new Date(item.dateLost).toLocaleDateString()}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${item._id}`}>
                                        <button className="btn bg-purple-600 text-white">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-500">No items found.</p>
                )}
            </div>
            <div className="flex justify-center items-center mt-6">
                <Link to="/allItems" className="btn px-6 bg-purple-600 text-white">
                    See All
                </Link>
            </div>
        </div>


    );
};

export default LatestFindLostItems;
