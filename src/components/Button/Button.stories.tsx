import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalButton from './Button';

export default {
  title: 'Button/Button',
  args: {
    children: 'Button',
  },
  component: InternalButton,
} as ComponentMeta<typeof InternalButton>;

export const Button: ComponentStory<typeof InternalButton> = (args) => (
  <InternalButton {...args} />
);
