import React, { useState } from 'react'
import Accordian from './Accordian';

const FAQ = () => {

    const faqs = [
        {
            "title" : "What is Book My Junk?",
            "details" :  "Book My Junk is an online platform which enables the consumer to dispose their E-waste in an environment friednly manner."
          },
          {
            "title" : "How Does Book My Junk Helps in E-waste Disposal?",
            "details" :  "Book My Junk does not charge any amount for collection and recycling of the E-waste from Users and Organizations."
          },
          {
            "title" : "Do I Receive Any Benefits?",
            "details" : "Once the E-waste has been recycled you will be receiving a Certificate of Appreciation which can be printed or shared on all Social Media Platforms.",
          },
          {
            "title" : "How Can I Place an E-waste Pickup Order?",
            "details" : "To place a pickup order for E-waste simply login to our app or website and place an order for E-waste pickup.",
          },
          {
            "title" : "How can Reschedule my E-waste Pickup?",
            "details" : "You can reschedule your E-waste pickup by setting up an inquiry ticket on the app and when our team representative gets in touch, you can request for a reschedule of E-waste pickup.",
          },
          {
            "title" : "How Can I Cancel My E-waste Pickup?",
            "details" : "You can cancel your E-waste pickup by simply using the cancel pickup option under the scheduled pickup section.",
          },
          {
            "title" : "How Many Days Will It Take For My E-waste to Recycle?",
            "details" : "We ensure all the E-waste collected from the User is recyccled under 30 days.",
          },
      ]

        const [openIndex, setOpenIndex] = useState(null);

            const toggleAccordion = (index) => {
                setOpenIndex(openIndex === index ? null : index);
            };

  return (
    
    <>
        <div className="w-[80vw] mx-auto p-20 max-md:p-5 max-lg:p-5">
            <h2 className='text-4xl font-bold mb-5'>FAQ's</h2>
          {faqs.map((question, index) => (
            <Accordian
              key={index}
              title={question.title}
              details={question.details}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
      </div>
    </>
  )
}

export default FAQ