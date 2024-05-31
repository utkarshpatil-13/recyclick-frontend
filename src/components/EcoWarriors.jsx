import React from 'react'
import kshitiz from '../assets/ecowarriors/kshitiz.png'
import jaya from '../assets/ecowarriors/jaya.png'
import himanshu from '../assets/ecowarriors/himanshu.png'
import latisha from '../assets/ecowarriors/latisha.png'
import mansi from '../assets/ecowarriors/mansi.png'
import sanman from '../assets/ecowarriors/sanman.png'
import Warrior from './Warrior'

const EcoWarriors = () => {
    const warriors = [
        {
            image: kshitiz,
            name: "Kshitij Kothari",
            address: "Kandivali West"
        },
        {
            image: mansi,
            name: "Mansi Khimsaria",
            address: "Kandivali East"
        },
        {
            image: sanman,
            name: "Sanman Ganpule",
            address: "Thane West"
        },
        {
            image: latisha,
            name: "Latisha Shah",
            address: "Malabar Hill"
        },
        {
            image: himanshu,
            name: "Himanshu Patel",
            address: "Andheri West"
        },
        {
            image: jaya,
            name: "Jaya Bhat",
            address: "Kandivali West"
        },
    ]

    return (
        <div className='relative bg-[hsl(158,49%,49%)] text-white h-fit w-full'>
            <div className="max-md:hidden absolute inset-0 bg-linewarriors bg-auto bg-no-repeat bg-center"></div>
            <div className="mx-auto p-10 text-center max-md:p-3 max-md:py-10">
                <h2 className='text-5xl font-bold mt-7 text-center'>Meet our recent Eco Warriors</h2>
                <div className='my-8 flex py-10 rounded-3xl gap-10 max-md:flex-col max-md:py-0'>
                    <ul className='w-full h-fit text-center'>
                        <li className='flex justify-center gap-3 mt-10 mb-10 mx-auto max-md:flex-col max-md:items-center'>
                            {
                                warriors.map((warrior, index) => <Warrior image={warrior.image} name={warrior.name} address={warrior.address} index={index} />)
                            }
                        </li>
                    </ul>
                </div>
                <button className='text-xl text-black bg-white rounded-full px-10 py-3 font-bold'>BECOME AN ECO WARRIOR</button>
            </div>
        </div>
    )
}

export default EcoWarriors