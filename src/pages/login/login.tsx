import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../components/auth/login-form';
import { LocationLink } from '../../components/auth/location-link';

const Login = (): JSX.Element => (
  <div className="page__login-container container">
    <Helmet>
      <title>{'6 cities-Login'}</title>
    </Helmet>
    <LoginForm />
    <LocationLink />
  </div>

);
export default Login;
