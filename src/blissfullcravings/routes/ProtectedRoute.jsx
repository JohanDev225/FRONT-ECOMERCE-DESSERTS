import { Navigate } from "react-router-dom"

import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />;
    }
    return children
  };

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
