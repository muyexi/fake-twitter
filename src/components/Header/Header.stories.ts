import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    name: 'Jane Doe',
  },
};

export const LoggedOut: Story = {};
