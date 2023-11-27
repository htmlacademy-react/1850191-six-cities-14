import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/routes';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';
import { selectUserInfo } from '../../../store/features/user/selectors';
import { logout } from '../../../store/features/auth/thunk-logout';

export const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const userInfo = useAppSelector(selectUserInfo);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth && userInfo ? (
              //пользователь авторизован
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img src={userInfo.avatarUrl} alt="User avatar" />
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout" onClick={handleLogout}>Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              // пользователь не авторизован
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
