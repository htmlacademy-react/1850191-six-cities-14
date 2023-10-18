import { LocationLink } from '../../Components/Auth/location-link/location-link';
import { LoginForm } from '../../Components/Auth/login-form/login-form';


const Login = () => {
  return (
    <div className="page__login-container container">
      <LoginForm />
      <LocationLink city="Amsterdam" />
    </div>

  );
};

export default Login;
