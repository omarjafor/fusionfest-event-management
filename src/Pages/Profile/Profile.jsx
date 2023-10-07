import { Helmet } from "react-helmet-async";
import useHook from "../../Hooks/useHook";
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';

const Profile = () => {

    const { user } = useHook()

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <Helmet>
                <title>Event | Profile</title>
            </Helmet>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={user?.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {user?.displayName}
                    </h4>
                    <p className="block bg-gradient-to-tr from-blue-600 to-blue-800 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        {user?.email}
                    </p>
                </div>
                <div className="flex justify-center pb-4 gap-4">
                    <button
                        className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-red-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <AiFillFacebook size={30}></AiFillFacebook>
                        </span>
                    </button>
                    <button
                        className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-green-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <AiFillTwitterSquare size={30}></AiFillTwitterSquare>
                        </span>
                    </button>
                    <button
                        className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-amber-500 text-center font-sans text-xs font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <AiOutlineInstagram size={30}></AiOutlineInstagram>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;