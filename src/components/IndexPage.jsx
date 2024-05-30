import React from 'react'
import recycle from '../assets/recycle.svg'
import whatsapp from '../assets/whatsapp.svg'
import VideoPage from './VideoPage'
import Hazards from './Hazards'
import Book from './Book'

const IndexPage = () => {
  return (
    <>

        <div className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className="relative z-10 text-black flex px-5 py-10 gap-10">
            <div className='flex flex-col items-center w-[50vw]'>
                <p className='text-6xl font-bold'> 
                    Create a clutter-free home and greener planet
                </p>
                <p className='text-4xl text-black mt-5'>
                    Dispose your e-waste scientifically with Book My Junk App.
                </p>
                <div className='flex gap-3 mt-10'>
                    <button className='text-xl text-white bg-[#4CAF50] rounded-full px-10 py-3 flex gap-3 font-bold'>
                    <img src={whatsapp} className='w-7 h-7' alt="" />
                    BOOK FREE E-WASTE COLLECTION</button>
                    <button className='text-xl text-black bg-white rounded-full px-10 py-3 font-bold'>DOWNLOAD APP NOW</button>
                </div>
            </div>
            <div className='relative flex flex-col items-center justify-center border-white border-2 bg-[rgba(177,213,161,0.4)] p-6'>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <ul className='relative text-xl font-bold text-black flex justify-evenly flex-col h-full'>
                    <li className='flex gap-2'><img src={recycle} alt="Recycle" className="w-7 h-7"/> Hassle-free disposal of e-waste with our app</li>
                    <li className='flex gap-2'><img src={recycle} alt="Recycle" className="w-7 h-7"/>Easy way to schedule your e-waste pickup</li>
                    <li className='flex gap-2'><img src={recycle} alt="Recycle" className="w-7 h-7"/>Eco-friendly and sustainable e-waste disposal</li>
                    <li className='flex gap-2'><img src={recycle} alt="Recycle" className="w-7 h-7"/>Certified and responsible e-waste recyclers</li>
                    <li className='flex gap-2'><img src={recycle} alt="Recycle" className="w-7 h-7"/>Safe and ethical e-waste recycling</li>
                </ul>
            </div>
        </div>
        </div>
        <VideoPage />
        <Hazards />
        <Book />
    </>
  )
}

export default IndexPage