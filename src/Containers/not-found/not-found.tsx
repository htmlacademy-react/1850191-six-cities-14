import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const readablePath = decodeURIComponent(location.pathname);

  return (
    <div className="page__404-container container">
      <p>Запрашиваемая страница: {readablePath} не найдена</p>
      <Link to={'/'}>
        вернуться на главную
      </Link>
    </div >
  );
};
export default NotFound;
