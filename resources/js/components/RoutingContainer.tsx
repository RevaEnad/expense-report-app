import { useServiceAuthContext } from "../hooks/context/AuthServiceContext";
import AdminPage from "./AdminPage";
import Homepage from './Homepage';

const RoutingContainer = () => {
    const {role} = useServiceAuthContext();

    return (
        <>
        {role === 'admin' ? <AdminPage/> : <Homepage/>}
        </>
    )
}

export default RoutingContainer;