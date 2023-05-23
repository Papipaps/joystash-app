import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (StoryComponent: Story) => (
      <MemoryRouter>
        <StoryComponent />
      </MemoryRouter>
    ),
  ],
};

const Template: Story = () => <Navbar />;

export const Default = Template.bind({});
