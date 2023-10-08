import { Link } from "react-router-dom";


const Service = ({ service }) => {

    const { id, price, title, short_details, image} = service || {};
    return (
        <section className="my-8">
            <div className="relative flex w-96 flex-col rounded-xl bg-green-400 hover:bg-lime-400 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-black antialiased">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-medium leading-normal text-gray-700 antialiased opacity-75">
                        {short_details}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/services/${id}`}
                        className="block w-full select-none rounded-lg bg-blue-500 hover:bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        See More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Service;