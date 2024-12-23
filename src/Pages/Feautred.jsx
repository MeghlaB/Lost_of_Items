import React from 'react'

import frist from '../../src/assets/fristicon.png'
import second from '../../src/assets/second.png'
import third from '../../src/assets/third.png'
import fourth from '../../src/assets/frouth.jpeg'
import fivth from '../../src/assets/fivth.png'
import sixth from '../../src/assets/sixth.jpeg'
import sevent from '../../src/assets/alert.jpeg'
import egith from '../../src/assets/eight.png'
import nine from '../../src/assets/seven.png'


export default function Featured() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            <div className=" bg-white   p-6 rounded-lg shadow hover:shadow-lg transition"

            >
                <img src={frist} alt="Avail Tax Benefits" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Matching</h3>
                <p className="text-gray-600 text-sm">Powered by AI algorithms, found items and lost item inquiries are automatically matched. Manual checking is no longer required!</p>
            </div>
            <div className="  bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"

            >
                <img src={second} alt="Trustworthy & Secure" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Self-Service</h3>
                <p className="text-gray-600 text-sm">Ability for customer to view/cancel/edit the submission with further details after the lost item is logged.</p>
            </div>
            <div className="  bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"

            >
                <img src={third} alt="Regular Updates" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg text-center font-semibold text-gray-800 mb-2">Customer Feedback</h3>
                <p className="text-gray-600 text-sm">Your customers’ feedback is important because it helps you consistently keep your edge. We make the feedback process easy and fast..</p>
            </div>
            <div className=" bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"

            >
                <img src={fourth} alt="Donate Hassle-free" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">SMS Notification</h3>
                <p className="text-gray-600 text-sm">Aside from email and the chat, users can also communicate with customers by sending them SMS from within the Software..</p>
            </div>
            <div className="  bg-white  p-6 rounded-lg shadow hover:shadow-lg transition"


            >
                <img src={fivth} alt="100% Verified Campaign" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Task List</h3>
                <p className="text-gray-600 text-sm">You can determine specific rules and procedures for certain found items and assign them to task lists..</p>
            </div>
            <div className=" bg-white p-6 rounded-lg shadow hover:shadow-lg transition"


            >
                <img src={sixth} alt="Greater Impact" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Currency Conversion</h3>
                <p className="text-gray-600 text-sm">With the currency conversion module, you’ll be able to keep the perfect overview as well as swiftly transfer (export and import) values.</p>
            </div>
         
            
            
            <div className=" bg-white p-6 rounded-lg shadow hover:shadow-lg transition"


            >
                <img src={sevent} alt="Greater Impact" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Fraud Detection</h3>
                <p className="text-gray-600 text-sm">The Lost and Found Software algorithms detect fraud and log these changes for authorized users to review or to alert them..</p>
            </div>
            <div className=" bg-white p-6 rounded-lg shadow hover:shadow-lg transition"


            >
                <img src={nine} alt="Greater Impact" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Category Management</h3>
                <p className="text-gray-600 text-sm">Over 260 categories are already available in the standard version of the Lost and Found Software.</p>
            </div>
            <div className=" bg-white p-6 rounded-lg shadow hover:shadow-lg transition"


            >
                <img src={egith} alt="Greater Impact" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Detailed History</h3>
                <p className="text-gray-600 text-sm">Keep track of all activities throughout the entire Lost and Found Software. Perfect for audits, detailed reporting and investigating..</p>
            </div>
        </div>
     
    )
}
