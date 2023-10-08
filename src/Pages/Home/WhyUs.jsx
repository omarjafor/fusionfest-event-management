

const WhyUs = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <div className='mt-10 py-10'>
                <h1 className='text-4xl font-bold'>Why US!</h1>
                <p className='max-w-3xl mx-auto my-4 text-base text-gray-500'>FusionFiest, Where Your Vision Meets Perfection. We specialize in seamlessly blending diverse cultures, creating events that celebrate inclusivity and diversity. Our team of visionaries and creatives turn ideas into extraordinary realities, crafting events that leave a lasting impression.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-left mx-10 mb-10 px-20 pb-20">
                <div className="max-w-[400px]">
                    <small className="text-lg text-[#878787] uppercase [word-spacing:6px] tracking-widest pt-2 border-solid border-green-500 border-t-2">We Are FusionFiest</small>
                    <h1 className="text-4xl mb-8 mt-5 font-medium"><strong>No.1</strong> Events Management</h1>
                    <p className="text-justify mb-12 text-[#333333] text-base">
                        At FusionFiest, we specialize in creating unforgettable experiences that seamlessly blend cultures, traditions, and creativity. We&apos;re not just event planners; we&apos;re storytellers, cultural ambassadors, and visionaries. Whether you&apos;re celebrating a community festival, a corporate gala, or a personal milestone.
                    </p>
                    <button className="rounded-full py-5 px-9 cursor-pointer text-base text-white font-semibold bg-gradient-to-br from-[#00b09b] to-[#96c93d] hover:bg-gradient-to-tl">About FusionFiest</button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 col-span-2">
                    <div className="text-center h-[213px] bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-r border-solid border-b border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/kS42cHB/hand-shake.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black hover:text-white font-bold">
                                Friendly Team
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                More than 200 teams
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px] bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-r border-l border-solid border-b border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/Q8pWRHk/two-party-balloons.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Perfect Venues
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                More than 50+ Venues
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-l border-solid border-b border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/z7JGd1N/champagne-glass.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Unique Planing
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We Think Out Of the Box
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-r border-solid border-t border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/JxGxGMY/joker-hat.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Unforgettable Time
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We make perfect event
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-r border-l border-solid border-t border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/wJ7zncH/communications.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                24/7 Hours Support
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                Anytime Anywhere
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px] bg-white hover:bg-gradient-to-br from-[#00b09b] to-[#96c93d] border-l border-solid border-t border-[#f0f0f0]">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/JQMm7Ny/idea.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Briliant Idea
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We Have Million Idea
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;