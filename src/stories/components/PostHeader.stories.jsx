import React from 'react';
import { PostHeader } from '../../components/PostHeader';
import avatar from '../../assets/avatar.svg';

export default {
  title: 'Example/PostHeader',
  component: PostHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PostHeader {...args} />;

export const WithUser = Template.bind({});
WithUser.args = {
  title: "Mario",
  subtitle: "2 minutes ago",
  avatarPath: avatar
};