import { LocationLink } from '../../components/auth/location-link/location-link';
import { LoginForm } from '../../components/auth/login-form/login-form';

const Login = () => {
  return (
    <div className="page__login-container container">
      <LoginForm />
      <LocationLink city="Amsterdam" />
    </div>

  );
};
export default Login;
