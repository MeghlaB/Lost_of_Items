import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import DatePicker from "react-datepicker";

export default function DetailsPages() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const [recoverLocation, setRecoveryLocaion] = useState('');
  const [isRecovered, setIsRecovered] = useState(false); // New state to track recovery

  // axios data get
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/items/${id}`)
      .then((res) => {
        setItem(res.data);
      });
  }, []);

  // handle submit data
  const handleSubmit = async () => {
    const recoveryData = {
      recoverLocation,
      recoveryDate,
      recoverBy: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/recovere`,
        recoveryData
      );

      console.log("Response Data:", res.data);

      setmodalOpen(false);
      setIsRecovered(true); // Mark as recovered
    } catch (error) {
      console.error("Error adding recovery data:", error);
    }
  };

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
        <p className="text-gray-600 text-xl font-semibold mb-4">
          {item.description}
        </p>
        <div className="gap-4 text-black">
          <p>
            <span className="font-semibold">
              <span className="text-xl font-bold">Location</span>:
            </span>{" "}
            {item.location}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {item.category}
          </p>
          <p>
            <span className="font-semibold">Posted By:</span>{" "}
            {item?.user?.displayName} ({item?.user?.email})
          </p>
        </div>
      </div>

      <div className="p-6 bg-gray-50 flex justify-end">
        <button
          disabled={isRecovered}
          onClick={() => setmodalOpen(true)}
          className={`btn text-white px-6 py-3 rounded-lg transition-all duration-200 ${
            isRecovered
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isRecovered
            ? "Recovered"
            : item.postType === "Lost"
            ? "Found This!"
            : "This is Mine!"}
        </button>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Recovery Details</h2>

            <label className="block mb-2">Recovered Location:</label>
            <input
              type="text"
              value={recoverLocation}
              onChange={(e) => setRecoveryLocaion(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
              placeholder="Enter location"
            />

            <label className="block mb-2">Recovered Date:</label>
            <DatePicker
              selected={recoveryDate}
              onChange={(date) => setRecoveryDate(date)}
              className="w-full px-4 py-2 border rounded mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setmodalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
