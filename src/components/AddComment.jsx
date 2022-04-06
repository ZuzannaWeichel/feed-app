import comment from '../assets/comment.svg';
import add from '../assets/add.svg';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddComment = ({ postId }) => {
  
  const [isInput, setIsInput] = useState(false)
  const [newCommentText, setNewCommentText] = useState('')
  const { addNewComment } = useContext(GlobalContext);

  const showInput = () => {
    setIsInput(true)
  }
  
  const handleComment = (e) => {
    e.preventDefault()
    addNewComment({postId, comment: newCommentText})
    setNewCommentText('')
  }

  const renderAddComment = () => {
    return isInput ? 
      <form style={styles.wrapper} onSubmit={handleComment}>
        <input 
          autoFocus
          type="text"
          onChange={(e) => { setNewCommentText(e.target.value) }}
          value={newCommentText}
          style={styles.inputStyle}
          placeholder='Comment goes here'
        />
        <button 
          type="submit"
          style={styles.postButton}
        >
          Post
        </button>
      </form>
    :
    <div style={styles.wrapper}
      onClick={showInput}
    >
      <div style={styles.container}>
        <img src={comment} style={styles.icon}/>
        Add comment
      </div>
      <div style={styles.container}>
        <img src={add} style={styles.icon}/>
      </div>
    </div>
  }
  
  return (
   renderAddComment()
  )
}
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid rgba(206, 215, 231, 1)",
    background: 'rgba(241, 244, 248, 1)',
    borderRadius: 100,  
    margin: "0px 30px 30px",
    height: 40,
    position: 'relative'
  },
  inputStyle: {
    border: 0,
    borderRadius: 100,
    paddingLeft: 20,  
    outline: "none",
    width: "100%",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
  },
  postButton: {
    border: 0,
    fontFamily: "Poppins, sans-serif",
    borderRadius: 100,
    position: "absolute",
    top: "25%",
    left: "90%",
    background: "transparent",
    ":hover": {
      color: "rgba(0, 108, 250, 1)",
      fontWeight: 500,
      cursor: "pointer",
    }
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    margin: 15,
    width: 18,
    height: 18
  }
}