import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
