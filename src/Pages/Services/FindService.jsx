import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";


const FindService = () => {
    const [service, setService] = useState({});
    const [data, setData] = useState([])
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {

        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setData(data));

    }, []);

    useEffect( () => {
        const findService = data?.find( ( srvc ) => srvc.id === idInt);
        setService(findService);

    } , [idInt, data])

    return (
        <div>
            <Helmet>
                <title>FusionFest | Service Details</title>
            </Helmet>
            <div>
                <ServiceDetails service={service} ></ServiceDetails>
            </div>
        </div>
    );
};

export default FindService;