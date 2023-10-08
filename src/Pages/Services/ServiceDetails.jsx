import { useParams } from "react-router-dom";


const ServiceDetails = () => {

    const id = useParams();
    const iden = id.id;

    return (
        <div>
            Heloooooooooooooooooo {iden}
        </div>
    );
};

export default ServiceDetails;