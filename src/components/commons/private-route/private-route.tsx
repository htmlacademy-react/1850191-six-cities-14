import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../const/routes';


type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {

  const hasAccess = true;
  return hasAccess ? children : <Navigate to={AppRoute.Login} />;

};
