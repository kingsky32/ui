import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalInput from './Input';

export default {
  title: 'Input/Input',
  args: {
    placeholder: 'placeholder',
  },
  component: InternalInput,
} as ComponentMeta<typeof InternalInput>;

export const Input: ComponentStory<typeof InternalInput> = (args) => (
  <InternalInput {...args} />
);
