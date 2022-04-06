import comment from '../assets/comment.svg';
import add from '../assets/add.svg';
import { useState } from 'react';

export const AddComment = ({handleComment}) => {
  
  const [showInput, setShowInput] = useState(false)
  const [newComment, setNewComment] = useState('')
  
  const handleAddComment = () => {
    setShowInput(true)
  }
  
  const renderAddComment = () => {
    return showInput ? 
      <form style={styles.wrapper} onSubmit={() => handleComment(newComment)}>
        <input 
          type="text"
          onChange={(e) => { setNewComment(e.target.value) }}
          value={newComment}
          style={styles.inputStyle}
          placeholder='Comment goes here'
        />
        <button 
          type='submit'
          style={styles.postButton}
          onClick={() => setNewComment('')}
        >
          Post
        </button>
      </form>
    :
    <div style={styles.wrapper}
      onClick={handleAddComment}
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