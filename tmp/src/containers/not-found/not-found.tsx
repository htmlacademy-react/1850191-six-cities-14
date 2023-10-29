import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  const location = useLocation();
  const readablePath = decodeURIComponent(location.pathname);

  return (
    <div className="page__404-container container">
      <Helmet>
        <title>{'6 cities-Not-Found'}</title>
      </Helmet>
      <p>Запрашиваемая страница: {readablePath} не найдена</p>
      <Link to={'/'}>
        вернуться на главную
      </Link>
    </div >
  );
};
export default NotFound;
