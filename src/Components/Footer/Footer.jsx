
const Footer = () => {
    return (
        
        <div className="flex items-end w-full bg-white">

            <footer className="w-full text-gray-700 bg-gradient-to-br from-[#00b09b] to-[#96c93d] hover:bg-gradient-to-tl body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <h1 className="text-4xl text-black font-bold">FusionFest</h1>
                        </a>
                        <p className="mt-2 text-sm text-black">No 1 Event Management For You!</p>
                        <div className="mt-4">
                            <span className="flex justify-center justify-items-center mt-2 sm:justify-start">
                                
                                <a className="text-white cursor-pointer hover:text-gray-700">
                                    <img src="https://i.ibb.co/w0ZjxMz/facebook.png" alt="" className="w-10 h-10" />
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
                                    <img src="https://i.ibb.co/Rjk4dw2/instagram.png" alt="" className="w-10 h-10" />
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
                                    <img src="https://i.ibb.co/1JGFPJk/linkedin.png" alt="" className="w-10 h-10" />
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
                                    <img src="https://i.ibb.co/8PKZfxC/youtube.png" alt="" className="w-10 h-10" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">About</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Company</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Careers</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Blog</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Contact Support</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Help Resources</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Release Updates</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Platform
                            </h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Pricing</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">FAQ</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Contact</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Send a Message</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">Request a Quote</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-gray-900">+880123-456-7890</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#337d42e1]">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-white font-medium capitalize xl:text-center">© 2023 All rights reserved by OMAR JAFOR</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;