import React from 'react';
import { InteractionNode } from '../../components/InteractionNode';
import fire  from '../../assets/fire.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';
import fireHover  from '../../assets/fireHover.svg';
import commentHover from '../../assets/commentHover.svg';
import shareHover from '../../assets/shareHover.svg';

export default {
  title: 'Example/InteractionNode',
  component: InteractionNode,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <InteractionNode {...args} />;

export const HypeInteraction = Template.bind({});
HypeInteraction.args = {
  icon: fire,
  iconHover: fireHover,
  number: 20,
  title: "Hypes"
};
export const CommentInteraction = Template.bind({});
CommentInteraction.args = {
  icon: comment,
  iconHover: commentHover,
  number: 100,
  title: "Comments"
};
export const ShareInteraction = Template.bind({});
ShareInteraction.args = {
  icon: share,
  iconHover: shareHover,
  number: 120,
  title: "Shares"
};
export const Views = Template.bind({});
Views.args = {
  number: 170,
  title: "Views"
};