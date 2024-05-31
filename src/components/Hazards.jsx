import React from 'react'

const Hazards = () => {
  return (
    <>
        <div className='relative h-fit'>
            <div className="absolute inset-0 bg-hazards bg-auto bg-no-repeat bg-right-top"></div>
            <div className="z-10">
                <div className='w-[80vw] mx-auto p-20 max-md:p-0 max-md:text-center'>
                    <h2 className='w-[37vw] text-5xl font-bold max-md:text-3xl max-md:w-full'>The Hidden Health Hazards of E-Waste in India</h2>  
                    <p className='my-10 text-xl'>The rapid growth of the electronics industry in India has resulted in a significant increase in e-waste generation. While electronic devices have made our lives easier, they also contain hazardous substances that can pose a serious threat to human health and the environment. Here are some eye-opening statistics that highlight the dangers of e-waste in India.</p> 
                    <div className='relative my-10 flex bg-white px-20 py-10 rounded-3xl items-center gap-10 max-md:px-5 max-md:py-5 max-md:flex-col'>
                        <img src="https://bookmyjunk.com/src/img/shape1.png" className="absolute left-0 top-0 max-md:w-10" alt="" />
                        <div className='mt-2'> 
                            <h2 className='text-4xl font-bold'>Health Hazards of E-Waste</h2>
                            <p className='my-4 text-xl'>Electronic waste contains toxic substances such as lead, mercury, cadmium, and brominated flame retardants, which can cause serious health problems when not disposed of properly.</p>
                            <ul className='mt-5 pr-32 max-md:pr-0'>
                                <li className='flex gap-3 text-xl mt-8 max-md:flex-col max-md:items-center'>
                                <img src="https://bookmyjunk.com/src/img/circle1.png" className='w-20 h-20' alt="" />
                                <span>E-waste workers in India are at a high risk of respiratory problems, skin disorders, and neurological disorders due to exposure to toxic substances (Central Pollution Control Board).</span>
                                </li>
                                <li className='flex gap-3 text-xl mt-8 max-md:flex-col max-md:items-center'>
                                <img src="https://bookmyjunk.com/src/img/circle2.png" className='w-20 h-20' alt="" />
                                <span>Children living near e-waste recycling sites in India have higher levels of lead in their blood, which can lead to developmental delays, cognitive impairment, and other health problems (World Health Organization).</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://bookmyjunk.com/src/img/healthpic.png" className='w-[60vw]' alt="" />
                        </div>
                    </div>
                    <div className='relative my-10 flex bg-white px-20 py-10 rounded-3xl items-center gap-10 max-md:px-5 max-md:py-5 max-md:flex-col'>
                        <img src="https://bookmyjunk.com/src/img/shape2.png" className="absolute right-0 top-0" alt="" />
                        <div>
                            <img src="https://bookmyjunk.com/src/img/e-waste-pic.png" className='w-[70vw]' alt="" />
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold'>Environmental Hazards of E-Waste</h2>
                            <p className='my-4 text-xl'>Improper disposal of e-waste can also have serious environmental consequences. When e-waste is burned or dumped in landfills, it releases toxic chemicals into the air, soil, and water, contaminating the environment and harming wildlife.</p>
                            <ul className='mt-5 pr-32 max-md:pr-0'>
                                <li className='flex gap-3 text-xl mt-8 max-md:flex-col max-md:items-center'>
                                <img src="https://bookmyjunk.com/src/img/circle1.png" className='w-20 h-20' alt="" />
                                <span>Over 95% of e-waste in India is managed by the informal sector, which often resorts to burning or dumping, leading to severe environmental pollution (Global E-Waste Monitor).</span>
                                </li>
                                <li className='flex gap-3 text-xl mt-8 max-md:flex-col max-md:items-center'>
                                <img src="https://bookmyjunk.com/src/img/circle2.png" className='w-20 h-20' alt="" />
                                <span>E-waste in India is responsible for over 40% of lead pollution and is a significant contributor to air and water pollution (Indian Institute of Technology Delhi).</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hazards