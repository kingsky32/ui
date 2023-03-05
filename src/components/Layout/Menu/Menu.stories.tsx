import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalMenu from './Menu';
import MenuItem from './Item';

export default {
  title: 'Layout/Menu/Menu',
  component: InternalMenu,
} as ComponentMeta<typeof InternalMenu>;

export const Menu: ComponentStory<typeof InternalMenu> = (args) => (
  <InternalMenu {...args}>
    <MenuItem>Menu 1</MenuItem>
    <MenuItem>Menu 2</MenuItem>
    <MenuItem>Menu 3</MenuItem>
    <MenuItem>Menu 4</MenuItem>
    <MenuItem>Menu 5</MenuItem>
  </InternalMenu>
);
