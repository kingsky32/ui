import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalDescriptions from './Descriptions';

export default {
  title: 'Descriptions',
  component: InternalDescriptions,
} as ComponentMeta<typeof InternalDescriptions>;

export const Descriptions: ComponentStory<typeof InternalDescriptions> = (
  args,
) => <InternalDescriptions {...args} />;
