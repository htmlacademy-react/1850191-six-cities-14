import React from 'react';
import { Header } from '../Header/Header';

interface TProps {
  children: JSX.Element;
}

const Layout = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
