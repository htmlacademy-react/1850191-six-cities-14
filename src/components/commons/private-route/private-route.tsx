import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/routes';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export const PrivateRoute = ({ children, authorizationStatus }: PrivateRouteProps): JSX.Element => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);
