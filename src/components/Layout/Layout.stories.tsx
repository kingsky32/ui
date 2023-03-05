import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalLayout from './Layout';

export default {
  title: 'Layout/Layout',
  args: {
    label: 'label',
  },
  component: InternalLayout,
} as ComponentMeta<typeof InternalLayout>;

export const Layout: ComponentStory<typeof InternalLayout> = (args) => (
  <InternalLayout {...args} />
);
