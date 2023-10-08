

const UpcomingEvent = ({ event } ) => {

    const { date, price, title, short_details, image_link } = event || {};

    return (
        <section>
            <div className="my-10">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gradient-to-br from-[#00b09b] to-[#96c93d] hover:bg-gradient-to-tl bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image_link}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6 text-left">
                        <h6 className="mb-4 bg-white rounded-full inline-block px-4 font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
                            Date: {date} <span>Tickets ${price}</span>
                        </h6>
                        <h4 className="mb-2 block font-sans text-3xl font-bold text-white leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {short_details}
                        </p>
                        <a className="inline-block" href="#">
                            <button
                                className="flex select-none bg-blue-600 items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                TICKETS
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvent;