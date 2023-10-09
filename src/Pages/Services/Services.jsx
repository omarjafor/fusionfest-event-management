import { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);

    return (
        <div>
            <div className='mx-auto'>
                <div className='mt-10 py-10'>
                    <h1 className='text-4xl font-bold'>Our Services</h1>
                    <p className='max-w-3xl mx-auto my-4 px-5 text-base text-gray-500'>Discover the array of services we offer to enhance your community and cultural event experiences. From event planning and management to venue selection and promotion, our dedicated team is here to ensure every detail is perfect. Explore how we can help bring your vision to life and create memorable moments.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;