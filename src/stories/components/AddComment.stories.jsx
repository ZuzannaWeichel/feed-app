import React from 'react';
import { AddComment } from '../../components/AddComment';
import avatar from '../../assets/avatar.svg'

export default {
  title: 'Example/AddComment',
  component: AddComment,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args) => <AddComment {...args} />;
