import type { Meta, StoryObj } from '@storybook/react';
import { TweetItem } from './';

const meta: Meta<typeof TweetItem> = {
  title: 'TweetItem',
  component: TweetItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TweetItem>;

export const Primary: Story = {
  args: {
    tweet: {
      id: 0,
      userId: 0,
      userName: 'A User Name',
      text: 'This is a tweet.',
      time: 1678700012233,
    },
  },
};
