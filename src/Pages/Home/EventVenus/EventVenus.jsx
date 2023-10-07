import AOS from 'aos';
import 'aos/dist/aos.css';
import './eventVenus.css'
import { useEffect } from 'react';


const EventVenus = () => {


    useEffect( () => {
        AOS.init();
    } ,[])


    return (
        <div>
            <section className="venue" id="venue">
                <div>
                    <h1 className='text-4xl font-bold'>Featured Event Venues</h1>
                </div>
                <div className="venue-list grid-cols-1 lg:grid-cols-2">
                    <div className="venue-box" data-aos="fade-right">
                        <img src="https://i.ibb.co/sb3LMmw/resizer-6.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Dhaka</h2>
                                <p>Gazipur, Bashundora</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-left">
                        <img src="https://i.ibb.co/SPLqW8f/resizer-8.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Chittagong</h2>
                                <p>DC Hills, Laldighi</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/1rc0MbP/resizer-2.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Bandarban</h2>
                                <p>Nilachol and Tajindong</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-down-left">
                        <img src="https://i.ibb.co/swTRLH0/resizer-7.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Barisal</h2>
                                <p>Durgasagar, Royel Palace</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-down-right">
                        <img src="https://i.ibb.co/xhyWF2N/resizer-5.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Kulna</h2>
                                <p>Grand Banquet, Hotel Rose</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/djwW14H/resizer-3.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Cumilla</h2>
                                <p>City Auditorium, Radission Blu</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventVenus;