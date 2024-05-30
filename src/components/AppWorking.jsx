import React from 'react'
import recyclikLogo from '../assets/recyclik-logo.svg'

const AppWorking = () => {
  return (
    <div className='relative flex flex-col justify-center items-center'>
        <div className="absolute inset-0 bg-hazards bg-auto bg-no-repeat bg-right-top"></div>
        <div className=''>
            <img src={recyclikLogo} alt="" />
        </div>
        <div className='my-10'>
            <h2 className='text-5xl font-bold'>How Book My Junk Works</h2>
            <p className='mt-5 text-xl text-center'>One app for an eco-friendly world!</p>
        </div>
        <div className='flex flex-col justify-center w-[50vw]'>
            <img src="https://bookmyjunk.com/src/img/works.png" alt="" />
            <div className='flex justify-between mt-5 text-xl font-bold gap-x-40'>
                <span className=''>DOWNLOAD AND REGISTER</span>
                <span className=''>SELECT YOUR E-WASTE ITEMS</span>
                <span className=''>REQUEST FOR FREE PICKUP</span>
            </div>
        </div>
        <div className='bg-white flex gap-5 my-10 p-10'>
            <p className='text-xl font-bold'>Download Book My Junk App here!</p>
            <img src="https://bookmyjunk.com/src/img/gplay.png" alt="" />
            <img src="https://bookmyjunk.com/src/img/appstore.png" alt="" />
        </div>
    </div>
  )
}

export default AppWorking