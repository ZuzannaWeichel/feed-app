import React from 'react';
import { PostInteractionBar } from '../../components/PostInteractionBar';
// import avatar from '../../assets/avatar.svg';

export default {
  title: 'Example/PostInteractionBar',
  component: PostInteractionBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PostInteractionBar {...args} />;

export const WithPost = Template.bind({});
WithPost.args = {
  isComment: false,
  post: {
    text: "It's a-me, Mario!",
    hypes: 2,
    comments: [{},{}],
    shares: 15,
    views: 110  
  }
};

export const WithComment = Template.bind({});
WithComment.args = {
  isComment: true,
  post: {
    text: "It's a-me, Mario!",
    hypes: 2,
    comments: [{},{}],
    shares: 15,
    views: 110  
  }
};