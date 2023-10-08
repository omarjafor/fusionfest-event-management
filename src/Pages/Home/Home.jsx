import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import EventVenus from "./EventVenus/EventVenus";
import WhyUs from "./WhyUs";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Event | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <EventVenus></EventVenus>
        </div>
    );
};

export default Home;