import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**  прокрутка страницы наверх, при смене маршрута */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
