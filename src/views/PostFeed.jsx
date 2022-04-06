import { Post } from '../components/Post';
import avatar from '../assets/avatar.svg';
import camera from '../assets/camera.svg'
import video from '../assets/video.svg'
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const PostFeed = () => {
  
  const [newPostText, setNewPostText] = useState('');
  const { posts, addNewPost } = useContext(GlobalContext);

  const handlePost = (e) => {
    e.preventDefault();    
    addNewPost(newPostText)
    setNewPostText('')
  }

  const renderCreatePost = () => {
    return (
      <form style={styles.container} onSubmit={handlePost}>
        <div style={styles.inputContainer}>
          <input 
            type="text"
            onChange={(e) => { setNewPostText(e.target.value) }}
            value={newPostText}
            placeholder="What's on your mind?"
            style={styles.input}
          />
        </div>
        <div style={styles.mediaContainer}>
          <div style={styles.media}>
            <div style={styles.camera}>
              <img src={camera} alt="camera"/> Add Media 
            </div>
            <div>
              <img src={video} alt="video" /> Go Live 
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              style={styles.button}
            >
              Post
            </button>
          </div>
        </div>

      </form>
    )
  }

  const renderPosts = (posts) => {
    return posts.map((post) => {
      return <Post key={post.id} post={post}/>
    })
  }

  return(
    <div aria-label="main-post-feed" style={styles.wrapper}>
      {renderCreatePost()}
      {renderPosts(posts)}
    </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
  container: {
    margin: 10,
    border: "1px solid rgba(206, 215, 231, 1)",
    borderRadius: 10,  
    maxWidth: 800,
    width: "100%",

  },
  inputContainer: {
    display: "flex",
    margin: 16,
    border: "1px solid rgba(206, 215, 231, 1)",
    borderRadius: 8, 
    height: 50,
    padding: "0px 20px",
    alignItems: "center",
  },
  input: {
    border: 0,
    outline: "none",
    width: "100%",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
  },
  mediaContainer: {
    margin: 16,
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    margin: 10,
    display: "flex",
    flexWrap: 'wrap'
  },
  camera:{
    marginRight: 20
  },
  button: {
    background: "rgba(0, 108, 250, 1)",
    borderRadius: 8,
    borderStyle: "none",
    width: 80,
    height: 40,
    fontFamily: "Poppins, sans-serif",
    color: "rgba(255, 255, 255, 1)"
  },
}