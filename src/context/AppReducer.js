import avatar from '../assets/avatar.svg';
import uuid from 'react-uuid';

export default (state, action) => {
  switch(action.type) {
      case 'ADD_POST':
        const newPost = {
          id: uuid(),
          timeStamp: Date.now(),
          text: action.payload,
          hypes: 0,
          comments: [],
          shares: 0,
          views: 0,
          user: {
            name: "Mario",
            avatar: avatar
          }, 
        }
        return {
          posts: [newPost, ...state.posts]
        }
      case 'ADD_COMMENT':
        console.log("double?")
        const postForUpdate = state.posts.find((p) => p.id === action.payload.postId)
        const newComments = [{
          id: uuid(),
          timeStamp: new Date(),
          text: action.payload.comment,
          hypes: 0,
          replies: 0,
          shares: 0,
          user: {
            name: "Mario",
            avatar: avatar,
          }
        }, ...postForUpdate.comments]

        postForUpdate.comments = newComments
        
        return {
          posts: [...state.posts]
        }
      default:
          return state;
  }
}