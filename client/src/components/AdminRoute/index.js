import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
    const user = useSelector((state) => state.user.current);

    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    // if (user.role !== 'admin') {
    //     return <Navigate to="/" />;
    // }

    return children;
}

export default AdminRoute;
