// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../AuthProvider/AuthProvider'
// import axios from 'axios'
// import { TfiLayoutGrid3Alt } from 'react-icons/tfi'
// import { CiViewTable } from 'react-icons/ci'
// import { Typewriter } from 'react-simple-typewriter'
// import UserAxiosSecure from '../Hooks/UserAxiosSecure'

// export default function Allrecovery() {
//     const axiosSecure = UserAxiosSecure()
//     const { user, loading, setLoading } = useContext(AuthContext)
//     const [recoveredItems, setIsRecovered] = useState([])
//     const [iscardLayOut, setLayOut] = useState(false)


//     useEffect(() => {
//         axiosSecure.get(`/allrcoveries`)
//             .then(res => {
//                 setIsRecovered(res.data)
//             })
//     }, [])
//     return (
//         <div className="container mx-auto p-6">
//             <h2 className="text-3xl font-bold text-center mb-6">
//                 <Typewriter
//                     words={['All Recovered Items']}
//                     loop={Infinity}
//                     cursor
//                     cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>|</span>}
//                     typeSpeed={50}
//                     deleteSpeed={50}
//                     delaySpeed={1000}
//                 />

//                 </h2>
//             <div className='text-right mb-4'>
//                 <button
//                     className=" bg-purple-600 px-4 py-2 text-3xl text-white rounded"
//                     onClick={() => setLayOut(!iscardLayOut)}
//                 >
//                     {
//                         iscardLayOut ? <TfiLayoutGrid3Alt /> : <CiViewTable />
//                     }
//                 </button>
//             </div>

//             {recoveredItems.length === 0 ? (
//                 <div className="text-center text-xl text-gray-600">
//                     No recovered items found. You haven't recovered any items yet.
//                 </div>
//             ) : iscardLayOut ? (
//                 // Card Layout
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {recoveredItems.map((item) => (
//                         <div key={item._id} className="border border-purple-500 border-1  p-4 rounded shadow hover:shadow-lg">
//                             <h3 className="text-lg font-bold">{item.title}</h3>
//                             <p><strong>Category:</strong> {item.category}</p>
//                             <p><strong>Recovered Location:</strong> {item.recoverLocation}</p>
//                             <p><strong>Recovered Date:</strong> {new Date(item.recoveryDate).toLocaleDateString()}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <table className="min-w-full table-auto border-collapse border border-gray-200">
//                     <thead>
//                         <tr className="bg-purple-600 text-white">
//                             <th className="px-4 py-2">Title</th>
//                             <th className="px-4 py-2">Category</th>
//                             <th className="px-4 py-2">Recovered Location</th>
//                             <th className="px-4 py-2">Recovered Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recoveredItems.map((item) => (
//                             <tr key={item._id} className="border-b hover:bg-gray-50">
//                                 <td className="px-4 py-2">{item.title}</td>
//                                 <td className="px-4 py-2">{item.category}</td>
//                                 <td className="px-4 py-2">{item.recoverLocation}</td>
//                                 <td className="px-4 py-2">{new Date(item.recoveryDate).toLocaleDateString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     )
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { CiViewTable } from "react-icons/ci";


export default function AllRecoveries() {
    const axiosSecure = UserAxiosSecure()
  const [recoveries, setRecoveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iscardLayOut, setLayOut] = useState(false)

  useEffect(() => {
  
    axiosSecure
      .get('allrecoveries', {
        
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
                {recoveries.map((item) => (
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
