import React, { useState } from 'react'
import { motion } from "motion/react"
import img1 from '../assets/logo/frist.png'
import img2 from '../assets/logo/second.png'
import img3 from '../assets/logo/thirs.jpeg'
import img4 from '../assets/logo/fourth.png'
import img5 from '../assets/logo/fivth.png'
import img6 from '../assets/logo/sixth.png'
import img7 from '../assets/logo/seven.png'
import img8 from '../assets/logo/nine.jpeg'
import img9 from '../assets/logo/ten.png'

const Logosection = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const page = 5; // Adjust the page numbers the way you want

    const updatePageNumber = (num) => {
        if ((num > (page - 1)) || (0 > num)) {
            return setPageNumber(0);
        }
        setPageNumber(num);
    };

    return (
        <div className='flex select-none justify-center items-center gap-5'>
            {/* Left Arrow */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { updatePageNumber(pageNumber - 1); }}
                className='hover:bg-zinc-200 px-1 py-1 rounded-full cursor-pointer'
            >
                <img
                    src={img1}
                    alt="Left Arrow"
                    className="w-10 h-10"
                />
            </motion.div>

            {/* Page Numbers */}
            <div className='flex justify-center items-center gap-2'>
                {[...Array(page).keys()].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { setPageNumber(item); }}
                        className={`cursor-pointer px-5 py-3 font-semibold rounded-full transition-all duration-200 ${
                            pageNumber === item ? 'bg-zinc-500 text-white' : 'bg-white border-zinc-300 text-gray-700'
                        }`}
                    >
                        {item + 1}
                    </motion.div>
                ))}
            </div>

            {/* Right Arrow */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { updatePageNumber(pageNumber + 1); }}
                className='hover:bg-zinc-100 px-4 py-4 rounded-full cursor-pointer'
            >
                <img
                    src={img2}
                    alt="Right Arrow"
                    className="w-10 h-10"
                />
            </motion.div>
        </div>
    );
};

export default Logosection;
