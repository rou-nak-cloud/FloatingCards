import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div
    drag dragConstraints={reference}
    whileDrag={{scale: 1}}
    dragElastic={0.1} 
    dragTransition={{bounceStiffness: 100 , bounceDamping: 10}}
     className='flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-6 py-7 overflow-hidden'>
        <FaFileAlt />
      <p className='text-sm leading-tight mt-7'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between px-7 py-3 mb-2 mt-1'>
            <h6 className='text-xs'>{data.fileSize}</h6>
            <span className='w-7 h-7 rounded-full items-center justify-center flex bg-zinc-800/40 p-2'>
                {data.isClose ? <FaDownload size="1rem" color='#fff' /> : <IoMdClose size="1rem" color='#fff' />}
            </span>
        </div>
        {data.tag.isOpen ? (
            <div className={`tag flex items-center ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"}  justify-center w-full py-4`}>
             <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
           </div>
      ) : null
    }
      </div>
    </motion.div>
  )
}

export default Card
