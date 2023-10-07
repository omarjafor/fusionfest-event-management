import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import EventVenus from "./EventVenus/EventVenus";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Event | Home</title>
            </Helmet>
            <Banner></Banner>
            <EventVenus></EventVenus>
        </div>
    );
};

export default Home;