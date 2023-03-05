import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalCheckbox from './Checkbox';

export default {
  title: 'Input/Checkbox',
  args: {
    label: 'label',
  },
  component: InternalCheckbox,
} as ComponentMeta<typeof InternalCheckbox>;

export const Checkbox: ComponentStory<typeof InternalCheckbox> = (args) => (
  <InternalCheckbox {...args} />
);
