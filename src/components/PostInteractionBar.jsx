import PropTypes from 'prop-types';
import fire  from '../assets/fire.svg';
import fireHover  from '../assets/fireHover.svg';
import fireClick  from '../assets/fireClick.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg';
import { InteractionNode } from './InteractionNode';

export const PostInteractionBar = ({ isComment, post }) => { 
  
  const postInteractions = [
    {
      icon: fire,
      hoverIcon: fireHover,
      clickIcon: fireClick, 
      number: post.hypes,
      title: "Hypes"
    },
    {
      icon: comment,
      number: post.comments.length,
      title: "Comments"
    },
    {
      icon: share,
      number: post.shares,
      title: "Shares"
    },
    {
      icon: null,
      number: post.views,
      title: "Views"
    }
  ]

  const commentInteractions = [
   {
      icon: fire,
      number: 20,
      title: "Hypes"
    },
    {
      icon: comment,
      number: 40,
      title: "Replies"
    },
    {
      icon: share,
      number: 5,
      title: "Shares"
    },
  ]

  const handleClick = (title) => {
    const postUpdate = postInteractions.find((el) => el.title === title)
    post[postUpdate.title] += 1
  }

  const interactions = isComment ? commentInteractions : postInteractions;
  return(
    <div style={styles.wrapper}>
      {interactions.map((interaction, index) => {
        return <InteractionNode
          key={`${interaction.title}-${index}`}
          icon={interaction.icon}
          iconHover={interaction.hoverIcon}
          iconClick={interaction.clickIcon}
          number={interaction.number}
          title={interaction.title}
          onClick={() => handleClick(interaction.title)}
        />
        })
      }
    </div>
  ) 
}

PostInteractionBar.propTypes = {
  isComment: PropTypes.bool,
  hypes: PropTypes.number,
  comments: PropTypes.array,
  shares: PropTypes.number,
  views: PropTypes.number 
}

const styles = {
  wrapper: {
    display: "flex",
    margin: "20px 30px",
    flexWrap: "wrap"
  }
}