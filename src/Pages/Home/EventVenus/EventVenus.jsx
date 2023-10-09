import AOS from 'aos';
import 'aos/dist/aos.css';
import './eventVenus.css'
import { useEffect } from 'react';


const EventVenus = () => {

    useEffect( () => {

        AOS.refresh();
        
        AOS.init({
            offset: 120,
            duration: 1000,
        });

        
    } ,[])

    return (
        <div>
            <section className="venue" id="venue">
                <div className=''>
                    <h1 className='text-4xl font-bold'>Featured Event Venues</h1>
                    <p className='max-w-2xl mx-auto px-5 my-4 text-base text-gray-500'>Our featured event venues are testament to our commitment to excellence and creativity. From elegant ballrooms to picturesque outdoor settings, each venue has been carefully selected to provide the perfect backdrop for your special occasion</p>
                </div>
                <div className="venue-list grid-cols-1 lg:grid-cols-2">
                    <div className="venue-box" data-aos="fade-right">
                        <img src="https://i.ibb.co/DzLpF92/event-grid-3.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Dhaka</h2>
                                <p>Gazipur, Bashundora</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-left">
                        <img src="https://i.ibb.co/dL3MFZ1/resizer-9.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Chittagong</h2>
                                <p>DC Hills, Laldighi</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-down-right">
                        <img src="https://i.ibb.co/1rc0MbP/resizer-2.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Bandarban</h2>
                                <p>Nilachol and Tajindong</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-down-left">
                        <img src="https://i.ibb.co/LPm8pzm/event-1.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Barishal</h2>
                                <p>Durgasagar, Royel Palace</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/xhyWF2N/resizer-5.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Khulna</h2>
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
                    <div className="venue-box" data-aos="zoom-in-right">
                        <img src="https://i.ibb.co/ZmgFbV9/event-grid-2.jpg" alt="img" />
                        <div className="venue-info">
                            <h2>Rajshahi</h2>
                            <p>Port Auditorium, Bell Vue</p>
                            <button className="btn">More Info</button>
                        </div>
                    </div>
                    <div className="venue-box" data-aos="zoom-in-left">
                        <img src="https://i.ibb.co/8zn82Rk/event-grid.jpg" alt="img" />
                        <div className="venue-info">
                            <h2>Sylhet</h2>
                            <p>Malnicherra Tea Estate</p>
                            <button className="btn">More Info</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventVenus;