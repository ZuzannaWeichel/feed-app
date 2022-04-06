import PropTypes from 'prop-types';
import { AddComment } from './AddComment';
import { PostHeader } from "./PostHeader";
import { PostInteractionBar } from './PostInteractionBar';

export const Post = ({ post }) =>{ 
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const renderComments = () => {
    return(
      <div>
      <hr style={styles.line}/>
      {post.comments.map((c) => {
        return (
          <div key={c.id}>
            <PostHeader
            isComment={true}
            avatarPath={c.user.avatar}
            title={c.user.name}
            subtitle={c.timeStamp.toLocaleDateString("en-US", options)}
            />
            <div style={styles.textContainer}>
              {c.text}
            </div>
            <PostInteractionBar
              isComment={true}
              post={post}
              comment={c}
            />
          </div>
        )
      })}
    </div>
    )
  }

  return(
    <div style={styles.wrapper}>
      <PostHeader
        isComment={false}
        avatarPath={post.user.avatar}
        title={post.user.name}
        subtitle={'2 minutes ago'}
      />
      <div style={styles.textContainer}>
        {post.text}
      </div>
      <PostInteractionBar
        isComment={false}
        post={post}
      />
      <AddComment postId={post.id}/>
      {renderComments()}
    </div>
  ) 
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    hypes: PropTypes.number,
    comments: PropTypes.array,
    shares: PropTypes.number,
    views: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }), 
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
    margin: "20px 30px 0px"
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins, sans-serif"
  },
  
  subtitle: {
    fontSize: 12,
    fontFamily: "Open Sans, sans-serif",
    color: "rgba(18, 21, 29, 0.6)"
  },
  line:{
    border: 0,
    height: 1,
    background:"rgba(206, 215, 231, 1)",
    margin: "0px 30px"
  }

}