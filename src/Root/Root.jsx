import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../Components/ScrollToTop";


const Root = () => {
    return (
        <div className="relative">
            <ScrollToTop></ScrollToTop>
            <div className="sticky inset-0 z-10 bg-white bg-opacity-70">
                <Navbar></Navbar>
            </div>
            <div className="relative z-0 overflow-x-hidden">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;