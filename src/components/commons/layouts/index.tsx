import { Footer } from '../footer';
import { Header } from '../header';


interface TProps {
  children: JSX.Element;
}

const Layout = ({ children }: TProps): JSX.Element => (
  <div>
    <Header />
    <main className="page__main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
