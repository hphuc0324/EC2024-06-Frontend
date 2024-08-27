import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function UserRoute({ children }) {
    const user = useSelector((state) => state.user.current);

    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return children;
}

export default UserRoute;
