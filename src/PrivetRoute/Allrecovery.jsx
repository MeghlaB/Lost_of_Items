


import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { CiViewTable } from "react-icons/ci";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


export default function AllRecoveries() {
    const axiosSecure = UserAxiosSecure()
    const{user} = useContext(AuthContext)
  const [recoveries, setRecoveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iscardLayOut, setLayOut] = useState(false)

  useEffect(() => {
  
    axiosSecure
      .get(`/allrecoveries?email=${user?.email}`, {
        
      })
      .then((response) => {
        setRecoveries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-6">
        <Typewriter
            words={['All Recovered Items']}
            loop={Infinity}
            cursor
            cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>|</span>}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
        />

        </h2>
    <div className='text-right mb-4'>
        <button
            className=" bg-purple-600 px-4 py-2 text-3xl text-white rounded"
            onClick={() => setLayOut(!iscardLayOut)}
        >
            {
                iscardLayOut ? <TfiLayoutGrid3Alt /> : <CiViewTable />
            }
        </button>
    </div>

    {recoveries.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
            No recovered items found. You haven't recovered any items yet.
        </div>
    ) : iscardLayOut ? (
        // Card Layout
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recoveries.map((item) => (
                <div key={item._id} className="border border-1  p-4 rounded shadow hover:shadow-lg animate-puls">
                    <div>
                    <img 
                    className="w-20 h-20 rounded-full"
                    src={item.recoverBy?.image}  alt="" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Recovered Location:</strong> {item.recoverLocation}</p>
                    <p><strong>Recovered Date:</strong> {new Date(item.recoveryDate).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Recovered Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Recovered Date</th>
            </tr>
          </thead>
          <tbody>
            {recoveries.map(item => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">{item.type}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">{item.category}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">{item.recoverLocation}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">{new Date(item.recoveryDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
</div>
)
}
