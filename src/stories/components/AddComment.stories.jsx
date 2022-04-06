import React from 'react';
import { AddComment } from '../../components/AddComment';

export default {
  title: 'Example/AddComment',
  component: AddComment,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <AddComment {...args} />;

export const WithUser = Template.bind({});
WithUser.args = {
  title: "Mario",
  subtitle: "2 minutes ago",
  avatarPath: avatar
};