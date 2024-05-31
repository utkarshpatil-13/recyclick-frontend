import React from 'react'

const Warrior = ({ image, name, address, index }) => {
    return (
        <div className={`z-10 flex flex-col items-center w-48 h-fit p-2 ${index % 2 === 0 ? 'mt-[-2em]' : 'mt-8'} max-md:mt-4`}>
            <img src={image} alt={name} className='w-full h-auto' />
            <h2 className='text-3xl font-bold'>{name}</h2>
            <p className='text-xl'>{address}</p>
        </div>
    )
}

export default Warrior
