import { Helmet } from 'react-helmet-async';
import { LocationLink } from '../../components/auth/location-link/location-link';
import { LoginForm } from '../../components/auth/login-form/login-form';

const Login = () => (
  <div className="page__login-container container">
    <Helmet>
      <title>{'6 cities-Login'}</title>
    </Helmet>
    <LoginForm />
    <LocationLink city="Amsterdam" />
  </div>

);
export default Login;
