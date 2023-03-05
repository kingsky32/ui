import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalMenuItem from './Item';

export default {
  title: 'Layout/Menu/Item',
  args: {
    children: 'Menu',
  },
  component: InternalMenuItem,
} as ComponentMeta<typeof InternalMenuItem>;

export const Item: ComponentStory<typeof InternalMenuItem> = (args) => (
  <InternalMenuItem {...args} />
);
