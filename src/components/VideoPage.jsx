import React from 'react';

const VideoPage = () => {
  return (
    <div className="relative h-fit max-md:my-10">
        <div className="absolute inset-0 h-fit bg-bgsec bg-cover bg-center rounded-2xl m-10 max-md:m-3"></div>
        <div className='relative z-10 border-2 border-[rgb(63,185,140)] m-10 rounded-3xl max-md:m-3'>
        <h2 className='text-4xl max-md:w-full max-md:px-2 w-[50vw] mx-auto text-center font-bold my-10'>Thank you Shri. PM Narendra Modi Ji for mentioning Ecoreco in 'Mann Ki Baat'!</h2>
            <div className='z-10 m-10 max-md:m-3 flex gap-4 max-md:flex-col'>
                <div className='w-full h-[50vh]'>
                <iframe 
                    className='w-full h-[50vh]'
                    src="https://www.youtube.com/embed/Q5sd300ct3E?start=0&rel=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; " 
                    allowFullScreen>
                </iframe> 
                </div>
                <div className='w-full h-[50vh]'>
                <iframe 
                    className='w-full h-[50vh]'
                    src="https://www.youtube-nocookie.com/embed/QnVrUpl1QjE?start=0&rel=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; " 
                    allowFullScreen>
                </iframe> 
                </div>
            </div>
            <h2 className='text-3xl w-[50vw] mx-auto text-center my-10 max-md:w-[70vw]'>"Ecoreco working in Mumbai has developed a system to collect E-waste through a Mobile App."</h2>
        </div>
    </div>
  );
}

export default VideoPage;

{/* */}