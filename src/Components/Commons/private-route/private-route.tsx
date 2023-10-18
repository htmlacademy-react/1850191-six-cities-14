import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/routes';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {

  const hasAccess = false;
  return hasAccess ? children : <Navigate to={AppRoute.Login} />;

};

export default PrivateRoute;
