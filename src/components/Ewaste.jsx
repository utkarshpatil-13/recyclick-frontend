import React from 'react'

const Ewaste = () => {

    const ewaste = ["LAPTOPS",
        "COMPUTERS",
        "MONITORS",
        "PRINTERS",
        "SCANNERS",
        "KEYBOARDS",
        "MOUSE",
        "MOBILE PHONES",
        "TV SETS",
        "REFRIGERATORS",
        "WASHING MACHINES",
        "AIR CONDITIONERS",
        "FANS",
        "MICROWAVE OVENS",
        "WATER HEATERS",
        "UPS & INVERTERS",
        "AUDIO & VIDEO EQUIPMENT",
        "CABLES & WIRES",
        "ELECTRONIC TOYS & GAMES",
        "OTHER ELECTRONIC"
    ]

  return (
    <>
        <div className='w-[80vw] mx-auto p-20 max-md:p-5 max-md:mx-0 max-md:w-full max-md:text-center'>
                    <div className='relative my-10 bg-white px-20 py-10 rounded-3xl gap-10 max-md:px-5 max-md:py-10'>
                        <img src="https://bookmyjunk.com/src/img/shape2.png" className="absolute right-0 top-0 max-md:w-12" alt="" />
                        <h2 className='w-[37vw] text-5xl font-bold max-md:w-full'>Dispose off all your e-waste effortlessly with us</h2>  
                        <p className='my-10 text-xl'>Check out this list of e-waste that we pick up for responsible disposal.</p> 
                        <div className='text-center'>
                            <ul className='mt-5 font-bold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {ewaste.map((waste, index) => (
                                    <li className='text-lg max-md:flex max-md:gap-2' key={index}>
                                        <img src="https://bookmyjunk.com/src/img/shape1.png" className='max-md:block hidden max-md:w-10 max-md:h-10' alt="" />
                                        <span>{waste}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='text-center mt-20'>
                            <button className="text-xl text-white bg-[#3FB98C] rounded-full px-6 py-2">Download Book My Junk App Now</button>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default Ewaste