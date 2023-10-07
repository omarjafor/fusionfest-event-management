import { Navigate } from "react-router-dom";
import useHook from "../Hooks/useHook";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useHook();

    if (loading) return <span className="loading loading-spinner loading-lg"></span>

    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;