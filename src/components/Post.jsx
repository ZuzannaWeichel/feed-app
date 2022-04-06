import PropTypes from 'prop-types';
import { AddComment } from './AddComment';
import { PostHeader } from "./PostHeader";
import { PostInteractionBar } from './PostInteractionBar';

export const Post = ({user, post}) =>{ 
  
  const handleComment = (comment) => {
    // e.preventDefault();  
    console.log(comment) 

    //update the global post object with new comment 
  }

  return(
    <div style={styles.wrapper}>
      <PostHeader
        avatarPath={user.avatar}
        title={user.name}
        subtitle={'2 minutes ago'}
      />
      <div style={styles.textContainer}>
        {post.text}
      </div>
      <PostInteractionBar
        isComment={false}
        post={post}
      />
      <AddComment handleComment={handleComment} />
    </div>
  ) 
}

Post.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  post: PropTypes.shape({
    text: PropTypes.string,
    hypes: PropTypes.number,
    comments: PropTypes.array,
    shares: PropTypes.number,
    views: PropTypes.number 
  }),
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(206, 215, 231, 1)",
    borderRadius: 10,  
    margin: 15,
    maxWidth: 800,
    width: "100%",
    justifyContent: "center"
  },
  textContainer: {
    margin: "15px 30px 0px"
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins, sans-serif"
  },
  
  subtitle: {
    fontSize: 12,
    fontFamily: "Open Sans, sans-serif",
    color: "rgba(18, 21, 29, 0.6)"
  }

}