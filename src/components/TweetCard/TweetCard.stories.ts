import type { Meta, StoryObj } from '@storybook/react';
import { TweetCard } from './';

const meta: Meta<typeof TweetCard> = {
  title: 'TweetCard',
  component: TweetCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TweetCard>;

export const Primary: Story = {
  args: {},
};
