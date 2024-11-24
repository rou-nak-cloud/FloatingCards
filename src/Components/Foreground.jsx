import React from 'react'
import Card from './Card'
import { useRef } from 'react'

const Foreground = () => {
    const ref = useRef(null)

    const data =[
        {
            desc: "Every small action counts! Reduce, reuse, and recycle to protect our planet. Choose eco-friendly habits and inspire others to do the same.",
            fileSize:".9mb",
            isClose: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Speed up your downloads! Use a stable connection and reliable software to ensure smooth and secure file transfers.",
            fileSize:".9mb",
            isClose: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Pause, breathe, and focus on the now. Mindfulness helps reduce stress and enhances clarity. A moment of awareness can transform your day.",
            fileSize:".9mb",
            isClose: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Before uploading files, double-check for sensitive data. Protect your privacy by using encrypted platforms for sharing information.",
            fileSize:".9mb",
            isClose: true,
            tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue"}
        },
        {
            desc: "Choose the right format when downloading or uploading. Compress large files with ZIP or RAR to save space and time.",
            fileSize:".9mb",
            isClose: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        
        {
            desc: "Upload your files to the cloud for easy access anytime, anywhere. A secure backup ensures your data is never lost.",
            fileSize:".9mb",
            isClose: true,
            tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue"}
        }
    ]
  return (
    <>
    <div ref={ref} className='w-full h-screen top-0 left-0 fixed z-[3] flex flex-wrap gap-9 p-6'>
    {data.map((item, index) => (
        <Card key={index}  data={item} reference={ref} />
    ))}
    </div>
    </>
  )
}

export default Foreground
