import { Footer } from '../footer';
import { Header } from '../header';


interface LayoutProps {
  children: JSX.Element;
  pageClass?: string;
  mainClass?: string;
  showFooter?: boolean;
  showNav?: boolean;
}

const Layout = ({ children, pageClass = '', mainClass = '', showFooter = true, showNav = true }: LayoutProps): JSX.Element => (
  <div className={`page ${pageClass || ''}`}>
    <Header showNav={showNav} />
    <main className={`page__main ${mainClass || ''}`}>{children}</main>
    {showFooter && <Footer />}
  </div>
);

export default Layout;
