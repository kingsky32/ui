import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalRadio from './Radio';

export default {
  title: 'Input/Radio',
  args: {
    label: 'label',
  },
  component: InternalRadio,
} as ComponentMeta<typeof InternalRadio>;

export const Radio: ComponentStory<typeof InternalRadio> = (args) => (
  <InternalRadio {...args} />
);
