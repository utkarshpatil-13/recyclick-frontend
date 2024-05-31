import React from 'react'
import recycle from '../assets/recycle.svg'
import whatsapp from '../assets/whatsapp.svg'
import VideoPage from './VideoPage'
import Hazards from './Hazards'
import Book from './Book'
import EcoWarriors from './EcoWarriors'
import Ewaste from './Ewaste'
import AppWorking from './AppWorking'
import About from './About'
import Contact from './Contact'
import FAQ from './FAQ'

const IndexPage = () => {
  return (
    <>  
        <div className="relative h-[70vh] max-md:h-[70%] flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className="relative z-10 text-black flex justify-center gap-10 px-5 py-10 max-md:flex-col">
            <div className='flex flex-col w-[40%] max-md:w-full max-md:text-center'>
                <p className='text-5xl max-md:w-full font-bold max-md:text-4xl'> 
                    Create a clutter-free home and greener planet
                </p>
                <p className='text-3xl text-black mt-5'>
                    Dispose your e-waste scientifically with Book My Junk App.
                </p>
                <div className='flex gap-3 mt-10 max-md:flex-col'>
                    <button className='items-center text-lg text-white bg-[#4CAF50] rounded-full px-10 py-3 flex font-bold justify-center gap-3'>
                    <img src={whatsapp} className='w-7 h-7' alt="" />
                    <span>BOOK FREE E-WASTE COLLECTION</span>
                    </button>
                    <button className='text-lg text-black bg-white rounded-full px-10 py-3 font-bold'>DOWNLOAD APP NOW</button>
                </div>
            </div>
            <div className='relative flex flex-col items-center justify-center border-white border-2 bg-[rgba(177,213,161,0.4)] p-6'>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <ul className='relative text-lg font-bold text-black flex justify-evenly flex-col h-full'>
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
        <EcoWarriors />
        <Ewaste />
        <AppWorking />
        <About />
        <Contact />
        <FAQ />
    </>
  )
}

export default IndexPage