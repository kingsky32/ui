import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalSpace from './Space';

export default {
  title: 'Space/Space',
  component: InternalSpace,
} as ComponentMeta<typeof InternalSpace>;

export const Space: ComponentStory<typeof InternalSpace> = (args) => (
  <InternalSpace {...args} />
);
