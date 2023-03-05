import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalSelect from './Select';

export default {
  title: 'Input/Select',
  args: {
    placeholder: 'placeholder',
    items: [
      {
        key: 'Option1',
        label: 'Option1',
        value: 'Option1',
      },
      {
        key: 'Option2',
        label: 'Option2',
        value: 'Option2',
      },
      {
        key: 'Option3',
        label: 'Option3',
        value: 'Option3',
      },
      {
        key: 'Option4',
        label: 'Option4',
        value: 'Option4',
      },
      {
        key: 'Option5',
        label: 'Option5',
        value: 'Option5',
      },
    ],
  },
  component: InternalSelect,
} as ComponentMeta<typeof InternalSelect>;

export const Select: ComponentStory<typeof InternalSelect> = (args) => (
  <InternalSelect {...args} />
);
