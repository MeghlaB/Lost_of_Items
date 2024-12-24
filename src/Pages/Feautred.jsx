import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={frist} alt="Smart Matching" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Matching</h3>
                <p className="text-gray-600 text-sm">Powered by AI algorithms, found items and lost item inquiries are automatically matched. Manual checking is no longer required!</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={second} alt="Customer Self-Service" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Self-Service</h3>
                <p className="text-gray-600 text-sm">Ability for customer to view/cancel/edit the submission with further details after the lost item is logged.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={third} alt="Customer Feedback" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg text-center font-semibold text-gray-800 mb-2">Customer Feedback</h3>
                <p className="text-gray-600 text-sm">Your customers’ feedback is important because it helps you consistently keep your edge. We make the feedback process easy and fast.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={fourth} alt="SMS Notification" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">SMS Notification</h3>
                <p className="text-gray-600 text-sm">Aside from email and the chat, users can also communicate with customers by sending them SMS from within the Software.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={fivth} alt="Task List" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Task List</h3>
                <p className="text-gray-600 text-sm">You can determine specific rules and procedures for certain found items and assign them to task lists.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={sixth} alt="Currency Conversion" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Currency Conversion</h3>
                <p className="text-gray-600 text-sm">With the currency conversion module, you’ll be able to keep the perfect overview as well as swiftly transfer (export and import) values.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={sevent} alt="Fraud Detection" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Fraud Detection</h3>
                <p className="text-gray-600 text-sm">The Lost and Found Software algorithms detect fraud and log these changes for authorized users to review or to alert them.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={nine} alt="Category Management" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Category Management</h3>
                <p className="text-gray-600 text-sm">Over 260 categories are already available in the standard version of the Lost and Found Software.</p>
            </motion.div>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform" 
                whileHover={{ scale: 1.05, y: -10 }} 
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={egith} alt="Detailed History" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Detailed History</h3>
                <p className="text-gray-600 text-sm">Keep track of all activities throughout the entire Lost and Found Software. Perfect for audits, detailed reporting and investigating.</p>
            </motion.div>
        </div>
    )
}
