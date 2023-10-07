import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="relative">
            <div className="relative z-10">
                <Navbar></Navbar>
            </div>
            <div className="relative z-0">
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