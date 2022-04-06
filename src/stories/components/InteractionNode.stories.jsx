import React from 'react';
import { InteractionNode } from '../../components/InteractionNode';
import fire  from '../../assets/fire.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';

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
  number: 20,
  title: "Hypes"
};
export const CommentInteraction = Template.bind({});
CommentInteraction.args = {
  icon: comment,
  number: 100,
  title: "Comments"
};
export const ShareInteraction = Template.bind({});
ShareInteraction.args = {
  icon: share,
  number: 120,
  title: "Shares"
};
export const Views = Template.bind({});
Views.args = {
  number: 170,
  title: "Views"
};