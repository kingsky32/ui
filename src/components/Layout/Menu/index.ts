import InternalMenu from './Menu';
import MenuItem from './Item';

const Menu = InternalMenu as typeof InternalMenu & {
  Item: typeof MenuItem;
};
Menu.Item = MenuItem;

export default Menu;
