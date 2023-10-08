import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import EventVenus from "./EventVenus/EventVenus";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Event | Home</title>
            </Helmet>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <EventVenus></EventVenus>
        </div>
    );
};

export default Home;