import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'widgets/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple button component with opportunity to add children components'
      }
    }
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of padding of the button'
    },
    insideText: {
      name: 'Inside Text',
      description: 'Text which inside the button',
    }
  },
  decorators: [
    (Story) => (
      <div style={{margin: 20}}>
        <Story />
      </div>
    )
  ],
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    insideText: 'BUTTON'
  },
  name: 'Small Size Button'
};

export const Medium: Story = {
  args: {
    size: 'medium',
    insideText: 'BUTTON'
  },
  name: 'Small Size Button'
};

export const Large: Story = {
  args: {
    size: 'large',
    insideText: 'BUTTON'
  },
  name: 'Medium Size Button'
};

export const Huge: Story = {
  args: {
    size: 'huge',
    insideText: 'BUTTON'
  },
  name: 'Huge Size Button'
};