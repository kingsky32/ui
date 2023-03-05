import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InternalDescriptions from './Descriptions';
import DescriptionsItem from './Item';

export default {
  title: 'Descriptions/Descriptions',
  component: InternalDescriptions,
} as ComponentMeta<typeof InternalDescriptions>;

export const Descriptions: ComponentStory<typeof InternalDescriptions> = (
  args,
) => (
  <InternalDescriptions {...args}>
    <DescriptionsItem title="title">children</DescriptionsItem>
    <DescriptionsItem title="title">children</DescriptionsItem>
    <DescriptionsItem title="title">children</DescriptionsItem>
    <DescriptionsItem title="title">children</DescriptionsItem>
    <DescriptionsItem title="title">children</DescriptionsItem>
  </InternalDescriptions>
);
