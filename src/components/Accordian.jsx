import React from 'react'

const Accordion = ({ title, details, isOpen, toggleAccordion }) => {
  return (
    <div className="py-2">
      <div className='border-2 border-black bg-white text-black'>
        <div className="flex justify-between w-full p-2" onClick={toggleAccordion}>
          <span className='font-semibold text-xl text-left'>{title}</span>
          <svg className={`w-5 h-5 ${isOpen ? 'rotate-180' : ''} transition-transform duration-300 ease-in-out`} viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" strokeWidth={7} strokeLinecap="round" />
          </svg>
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className={`overflow-hidden text-lg p-2`}>
            {details}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
