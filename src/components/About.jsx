import React from 'react'

const About = () => {

    const about = [
        "Book My Junk is the first e-waste disposal service of its kind in the nation, catering to end consumers of EEE.",
        "Through social and print media, consumers are made aware of their environmental responsibilities for informed decision-making.",
        "Book My Junk offers a hassle-free online collection request system and sends trained staff and vehicles to consumers' doors for pick up.",
        "End-consumers receive a Certificate of Appreciation as an Eco Warrior, acknowledging their contribution to the environment.",
        "Book My Junk has a large branded vehicle fleet with well-dressed staff currently servicing Greater Mumbai and planning to expand in 10 other major cities.",
        "Producers can utilize Book My Junk's services to meet E-waste Management Rules obligations.",
        "As a registered startup with DIPP, Reverse E-commerce Private Limited offers Book My Junk services."
    ]

  return (
    <>
        <div className='relative h-fit bg-white'>
            <div className='flex w-[80vw] mx-auto p-20 gap-20 max-md:p-5 max-md:flex-col max-md:text-center max-md:w-full max-md:mx-0'>
                <div className="absolute inset-0 bg-book bg-auto bg-no-repeat bg-left-top"></div>
                <div className='w-[60vw] max-md:w-full max-md:px-5'>
                    <h2 className='text-5xl font-bold'>About Book My Junk</h2>
                    <p className='text-2xl mt-5'>Who we are and what we stand for in Mumbai</p>
                    <ul className='my-10'    >
                    {
                        about.map((commitment, index) => (
                            <li className='flex gap-3 mt-3 text-xl'>
                                <img src="https://bookmyjunk.com/src/img/shape1.png" className='w-10 h-10' alt="" />
                                <p>{commitment}</p>
                            </li>
                        ))   
                    }
                    </ul>
                </div>
                <div className='flex flex-col gap-5 max-md:w-full'>
                    <div className='bg-[#F5F5F5] rounded-2xl px-3 py-5 w-[20vw] flex flex-col gap-5 max-md:w-full'>
                        <h2 className='text-4xl font-semibold'>VISION</h2>
                        <p className='text-xl'>To be a benchmark solution provider in the field of environment protection.</p>
                    </div>
                    <div className='bg-[#F5F5F5] rounded-2xl px-3 py-5 w-[20vw] flex flex-col gap-5 max-md:w-full'>
                        <h2 className='text-4xl font-semibold'>MISSION</h2>
                        <p className='text-xl'>To propagate and serve the cause of environment protection through technology and efficient management of resources.</p>
                    </div>
                    <div className='bg-[#F5F5F5] rounded-2xl px-3 py-5 w-[20vw] flex flex-col gap-5 max-md:w-full'>
                        <h2 className='text-4xl font-semibold'>VALUES</h2>
                        <p className='text-xl'>Credibility, Integrity, Concern Co-operation.</p>
                    </div>
                </div>
            </div>
            <div className='flex w-[80vw] mx-auto p-20 gap-7 max-md:w-full max-md:flex-col max-md:p-5'>
                <div className='border-2 border-[#3FB98C] p-10 rounded-2xl'>
                    <div className='flex gap-3 items-center max-md:flex-col max-md:my-5 max-md:text-center'>
                        <img src="https://bookmyjunk.com/src/img/soni.png" className='p-5 rounded-full' alt="" />
                        <div>
                            <h2 className='text-4xl text-semibold'>B.K. Soni</h2>
                            <p className='text-xl'>Chairman & Managing Director</p>
                        </div>
                    </div>
                    <div>
                        <p>B.K.Soni is the Chairman and Managing Director of Eco Recycling Ltd (Ecoreco) and the chief promoter of the group. Under Mr. Soni's stewardship the company has attained a leadership position as India's foremost e-waste management company with a dominant pan-India market presence. He is responsible for the strategic growth initiatives of the company and building a professional team of leaders. After delivering market dominance in the B2B segment, Mr. Soni is driving Ecoreco's next phase of growth, building a B2C franchisee led retail model to share the benefits of alarming but unfolding opportunity of e-waste management with all the stakeholders in one or the other form.</p>
                    </div>
                </div>
                <div className='border-2 border-[#3FB98C] p-10 rounded-2xl'>
                    <div className='flex gap-3 items-center max-md:flex-col max-md:my-5 max-md:text-center'>
                        <img src="https://bookmyjunk.com/src/img/shashank.png" className='p-5 rounded-full' alt="" />
                        <div>
                            <h2 className='text-4xl text-semibold'>Shashank Soni</h2>
                            <p className='text-xl'>Director</p>
                        </div>
                    </div>
                    <div>
                        <p>Shashank Soni is an Executive Director of Ecoreco. Shashank is responsible for developing and rolling out a pan-India marketing and sales strategy for the company. He oversees the de-manufacturing & factory operations and also looks into commercial negotiations. With rich exposure to international markets, Mr. Shashank is leading Ecoreco's transformation into an integrated pan-India e-waste management company. Mr. Shashank holds an MBA from Cardiff University, UK and holds a Bachelor of Commerce degree from Narsee Monjee Institute of Management Studies (NMIMS). Having travelled extensively, he has been part of industry events like Computex Taipei, Taiwan and various other conferences and events across Europe and Asia.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About