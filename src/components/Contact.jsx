import React from "react";
import facebook from "../assets/social media/facebook.svg";
import instagram from "../assets/social media/instagram.svg";
import twitter from "../assets/social media/twitter.svg";
import whatsapp from '../assets/whatsapp.svg'

const Contact = () => {
    return (
        <>
            <div className="w-full bg-[#3FB98C] text-white max-md:py-5" >
                <div className="flex w-[80vw] h-[70vh] mx-auto p-20 gap-5 items-center justify-center max-md:flex-col max-md:h-fit max-md:p-5">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-5xl font-semibold">
                            Time to make Mumbai Clean from e-waste!
                        </h2>
                        <h3 className="text-2xl font-semibold">Get in touch with us</h3>
                        <p className="text-xl">
                            422, The Summit, Near WEH Metro Station, Andheri Kurla Road,
                            Andheri (E), Mumbai-400093
                        </p>
                        <p className="text-xl">connectwithus@bookmyjunk.com</p>
                        <p className="text-xl">+91 8976769851</p>
                        <div className="flex gap-3">
                            <img src={facebook} className="w-10 h-10 border-2 border-white rounded-full p-2" alt="" />
                            <img src={instagram} className="w-10 h-10 border-2 border-white rounded-full p-2" alt="" />
                            <img src={twitter} className="w-10 h-10 border-2 border-white rounded-full p-2" alt="" />
                        </div>
                    </div>
                    <div className="border-2 border-white p-7 rounded-2xl">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-[#3FB98C] border-2 border-white text-white placeholder-white focus:border-white focus:outline-none focus:ring-0 mb-4 p-2 rounded"
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            className="bg-[#3FB98C] border-2 border-white text-white placeholder-white focus:border-white focus:outline-none focus:ring-0 mb-4 p-2 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email Id"
                            className="bg-[#3FB98C] border-2 border-white text-white placeholder-white focus:border-white focus:outline-none focus:ring-0 mb-4 p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="bg-[#3FB98C] border-2 border-white text-white placeholder-white focus:border-white focus:outline-none focus:ring-0 mb-4 p-2 rounded"
                        />
                        <div className="text-center mb-[-20px]">
                            <button className="text-xl px-20 font-semibold py-3 text-black bg-white mt-5 mb-10 rounded-full">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
