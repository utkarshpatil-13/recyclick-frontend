import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import recyclikLogo from './assets/recyclik-logo.svg'

export default function Header(){

    return (
        <div>
            <header className='p-4 flex justify-between'>
                <div className='w-full flex items-center justify-around'>
                    <img src={recyclikLogo} className="max-md:my-2 max-md:mx-auto" alt="" />
                    <div>
                        <button className=" max-md:hidden text-2xl text-white bg-[#3FB98C] rounded-full px-6 py-3">DOWNLOAD APP</button>
                    </div>

                </div>
            </header>
      </div>
    )
}