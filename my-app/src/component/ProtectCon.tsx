import { Navigate, Outlet } from 'react-router-dom';

const ProtectCon = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to='/conprofile' />;
  }

  return <Outlet />;
};

export default ProtectCon;