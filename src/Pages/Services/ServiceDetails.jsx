import Pricing from "./Pricing";


const ServiceDetails = ({ service }) => {

    const { price, date, time, location, title, short_details, image } = service || {};

    return (
        <div>
            <div className="mx-auto py-12 w-5/6 grid gap-10 grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="mb-12 flex flex-col overflow-hidden rounded-xl shadow-md">
                    <img
                        alt="details"
                        className="h-[700px] w-full object-cover object-center"
                        src={image}
                    />
                </div>
                <div className="text-left">
                    <div className="flex mb-4">
                        <img src="https://i.ibb.co/1rd2fW3/bookmark.png" alt="bookmark" className="h-8 w-8" /> 
                        <h4 className="text-2xl font-semibold"> Featured Event </h4>
                    </div>
                    <h2 className="mb-6 block text-4xl font-bold leading-[1.3] tracking-normal text-[#0B0B0B] antialiased">
                        {title}
                    </h2>
                    <div className="flex mb-5">
                        <div className="flex items-center p-4 mr-2 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/9tF1YZ1/date.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Event Date</h4>
                                <h2 className="font-bold text-lg uppercase"> {date} </h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 mr-2 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/xfTJ6cD/time.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Event Time</h4>
                                <h2 className="font-bold text-lg uppercase"> {time} </h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/LghwQ4J/location.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Event Location</h4>
                                <h2 className="font-bold text-lg uppercase"> {location} </h2>
                            </div>
                        </div>
                    </div>
                    <p className="block text-lg font-normal text-justify leading-8 text-gray-900 antialiased">
                        {short_details}
                        Welcome to a world of diverse and exciting events that await you! Our calendar is brimming with cultural richness, community spirit, and memorable experiences for everyone.

                        From lively festivals that celebrate the arts, music, and culinary delights from around the world, to spirited parades that showcase the vibrant tapestry of our community, there&apos;s something for every enthusiast.

                        Step right up to our captivating carnivals and fairs, where you&apos;ll find thrilling rides, mouthwatering treats, and games galore. These events are perfect for family fun and creating lasting memories.

                        Join us in celebrating cultural diversity at our cultural celebrations, where traditions, music, dance, and delectable cuisine come together in harmony. Immerse yourself in the sights and sounds of different cultures.

                        We also host fundraisers and charity galas that let you make a positive impact while enjoying elegant evenings of fine dining and entertainment. Your presence contributes.
                    </p>
                </div>
            </div>
            <div>
                <Pricing price={price}></Pricing>
            </div>
        </div>
    );
};

export default ServiceDetails;