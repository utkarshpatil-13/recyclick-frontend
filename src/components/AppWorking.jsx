import React from 'react'
import recyclikLogo from '../assets/recyclik-logo.svg'

const AppWorking = () => {
  return (
    <div className='relative flex flex-col justify-center items-center'>
        <div className="absolute inset-0 bg-hazards bg-auto bg-no-repeat bg-right-top"></div>
        <div className='max-md:w-[50vh]'>
            <img src={recyclikLogo} alt="" />
        </div>
        <div className='my-10 max-md:text-center'>
            <h2 className='text-5xl font-bold'>How Book My Junk Works</h2>
            <p className='mt-5 text-xl text-center'>One app for an eco-friendly world!</p>
        </div>
        <div className='flex flex-col justify-center w-[50vw] max-md:w-[35vh]'>
            <img src="https://bookmyjunk.com/src/img/works.png" className='max-md:hidden' alt="" />
            <div className='flex justify-between mt-5 text-xl font-bold gap-x-40 max-md:gap-x-20 max-md:text-lg max-md:text-center'>
                <ul className='flex md:hidden flex-col'>
                    <li className='flex flex-col items-center py-10'>
                        <img src="https://bookmyjunk.com/src/img/ic1.png" alt="" />
                        <span className='mt-2'>DOWNLOAD AND REGISTER</span>
                    </li>
                    <li className='flex flex-col items-center py-10'>
                        <img src="https://bookmyjunk.com/src/img/ic2.png" alt="" />
                        <span className='mt-2'>SELECT YOUR E-WASTE ITEMS</span>
                    </li>
                    <li className='flex flex-col items-center py-10'>
                        <img src="https://bookmyjunk.com/src/img/ic3.png" alt="" />
                        <span className='mt-2'>REQUEST FOR FREE PICKUP</span>
                    </li>
                </ul>
                <span className='max-md:hidden'>DOWNLOAD AND REGISTER</span>
                <span className='max-md:hidden'>SELECT YOUR E-WASTE ITEMS</span>
                <span className='max-md:hidden'>REQUEST FOR FREE PICKUP</span>
            </div>
        </div>
        <div className='bg-white flex gap-5 my-10 p-10 max-md:flex-col max-md:gap-3 max-md:text-center max-md:items-center'>
            <p className='text-xl font-bold'>Download Book My Junk App here!</p>
            <div className='md:hidden flex gap-3'>
                <img src="https://bookmyjunk.com/src/img/gplay.png" alt="" />
                <img src="https://bookmyjunk.com/src/img/appstore.png" alt="" />
            </div>
            <img src="https://bookmyjunk.com/src/img/gplay.png" className='max-md:hidden' alt="" />
            <img src="https://bookmyjunk.com/src/img/appstore.png" className='max-md:hidden' alt="" />
        </div>
    </div>
  )
}

export default AppWorking