import { useEffect, useState } from 'react';
import UpcomingEvent from './UpcomingEvent';
import { Helmet } from 'react-helmet-async';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    
    useEffect( () => {

        fetch('upcoming.json')
        .then( res => res.json())
        .then( data => setEvents(data));

    } , []);

    return (
        <div className='mx-20'>
            <Helmet>
                <title>FusionFest | Upcoming Events</title>
            </Helmet>
            <div className='mt-10 py-10'>
                <h1 className='text-4xl font-bold'>Upcoming Events</h1>
                <p className='max-w-3xl mx-auto my-4 text-base text-gray-500'>Explore the excitement on the horizon! Our &apos;Upcoming Events&apos; section is your gateway to a world of community and cultural experiences. Stay in the loop with a dynamic lineup of festivals, workshops, charity events, and more. Join us in celebrating diversity, creativity, and togetherness.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center'>
                {
                    events?.map(event => <UpcomingEvent key={event.id} event={event}></UpcomingEvent>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;