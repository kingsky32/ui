import InternalLayout from './Layout';
import Menu from './Menu';

const Layout = InternalLayout as typeof InternalLayout & {
  Menu: typeof Menu;
};
Layout.Menu = Menu;

export default Layout;
