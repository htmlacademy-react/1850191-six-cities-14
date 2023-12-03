import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { useAppSelector } from '../../../hooks/use-store-hooks';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
};
