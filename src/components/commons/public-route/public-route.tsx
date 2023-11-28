import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';
import { AuthorizationStatus } from '../../../const/routes';

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to="/" />;
  }

  return children;
};
