import PropTypes from 'prop-types';
import fire  from '../assets/fire.svg';
import fireHover  from '../assets/fireHover.svg';
import fireClick  from '../assets/fireClick.svg';
import commentIcon from '../assets/comment.svg';
import commentHover from '../assets/commentHover.svg';
import commentClick from '../assets/commentClick.svg';
import share from '../assets/share.svg';
import shareHover from '../assets/shareHover.svg';
import { InteractionNode } from './InteractionNode';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';


export const PostInteractionBar = ({ isComment, post, comment }) => { 
  
  const { incrementHypes } = useContext(GlobalContext);

  const postInteractions = [
    {
      icon: fire,
      hoverIcon: fireHover,
      clickIcon: fireClick, 
      number: post.hypes,
      title: "Hypes"
    },
    {
      icon: commentIcon,
      hoverIcon: commentHover,
      clickIcon: commentClick, 
      number: post.comments.length,
      title: "Comments"
    },
    {
      icon: share,
      hoverIcon: shareHover,
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
      hoverIcon: fireHover,
      clickIcon: fireClick, 
      number: comment?.hypes,
      title: "Hypes"
    },
    {
      icon: commentIcon,
      hoverIcon: commentHover,
      number: comment?.replies,
      title: "Replies"
    },
    {
      icon: share,
      hoverIcon: shareHover,
      number: comment?.shares,
      title: "Shares"
    },
  ]

  const handleClick = (title) => {
    const id = isComment? comment.id : post.id

    switch (title) {
      case "Hypes":
        incrementHypes(id)
      break
      // case "Comments":
      //   showComments(true)
      // break
      default:
        console.log(id, title)
    }
  }

  const interactions = isComment ? commentInteractions : postInteractions;
  return(
    <div style={styles.wrapper}>
      {interactions.map((interaction, index) => {
        return <InteractionNode
          key={`${interaction.title}-${index}`}
          icon={interaction.icon}
          iconHover={interaction.hoverIcon}
          iconClick={interaction.clickIcon?? interaction.icon}
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