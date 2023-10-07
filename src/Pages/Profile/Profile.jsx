import useHook from "../../Hooks/useHook";
import { FaFacebook, FaTwitter} from "react-icons/fa";


const Profile = () => {

    const { user } = useHook()

    return (
        <div className="flex justify-center items-center h-[80vh]">
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
                <div className="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <FaFacebook></FaFacebook>
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <FaTwitter></FaTwitter>
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;