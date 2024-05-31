import React from 'react'

const Book = () => {
  return (
    <>
      <div className='relative h-fit'>
        <div className="absolute inset-0 bg-book bg-auto bg-no-repeat bg-left-top"></div>
        <div className="relative z-10 w-[80vw] mx-auto p-20 max-md:p-5 max-md:w-full">
          <div className='my-10 flex py-10 rounded-3xl items-center gap-10 max-md:flex-col max-md:text-center'>
            <div>
              <h2 className='text-5xl font-bold mt-7'>Become an Eco Warrior with Book My Junk App!</h2>
              <p className='text-xl mt-7'>The Book My Junk App is the easiest and most convenient way to dispose of your e-waste responsibly.</p>
              <h3 className='text-2xl font-bold mt-7'>Here are some of the benefits of using the Book My Junk App.</h3>
              <ul className='text-xl flex justify-evenly flex-col h-full'>
                <li className='flex gap-2 mt-4'><img src="https://bookmyjunk.com/src/img/leafbullet.png" alt="Leaf" className="w-7 h-7" /> Hassle-free and eco-friendly disposal of e-waste.</li>
                <li className='flex gap-2 mt-4'><img src="https://bookmyjunk.com/src/img/leafbullet.png" alt="Leaf" className="w-7 h-7" />Easy scheduling and pickup of e-waste.</li>
                <li className='flex gap-2 mt-4'><img src="https://bookmyjunk.com/src/img/leafbullet.png" alt="Leaf" className="w-7 h-7" />Safe and responsible recycling by certified partners, so you can focus on your priorities.</li>
              </ul>
            </div>
            <div>
              <img src="https://bookmyjunk.com/src/img/certificate.png" className='w-[55vw] p-7 rounded-3xl border-2 border-[rgb(63,185,140)] max-md:w-[70vh]' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book