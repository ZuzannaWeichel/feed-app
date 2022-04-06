import React from 'react';
import { Post } from '../../components/Post';
import avatar from '../../assets/avatar.svg';
import uuid from 'react-uuid';

export default {
  title: 'Example/Post',
  component: Post,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Post {...args} />;

export const WithoutComments = Template.bind({});
WithoutComments.args = {
  post: {
    id: uuid(),
    timeStamp: new Date(),
    text: "Hui hew! Just what I needed!",
    hypes: 58,
    comments: [],
    shares: 63,
    views: 101,
    user: {
      name: "Mario",
      avatar: avatar
    }
  }
};

export const WithComments = Template.bind({});
WithComments.args = {
  post: {
    id: uuid(),
    timeStamp: new Date(),
    text: "It's a-me, Mario!",
    hypes: 2,
    comments: [
      {
        id: uuid(),
        timeStamp: new Date(),
        text: "ha ha",
        hypes: 0,
        replies: 0,
        shares: 0,
        user: {
          name: "Luigi",
          avatar: avatar,
        }
      },
      {
        id: uuid(),
        timeStamp: new Date(),
        text: "Mario!!!",
        hypes: 2,
        replies: 3,
        shares: 1,
        user: {
          name: "Luigi",
          avatar: avatar,
        }
      }
    ],
    shares: 15,
    views: 110,
    user: {
      name: "Mario",
      avatar: avatar
    },   
  }
};