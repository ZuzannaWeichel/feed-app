import avatar from '../assets/avatar.svg';
import uuid from 'react-uuid';

const reducer = (state, action) => {
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
        console.log({posts: [...state.posts]})

        return {
          posts: [...state.posts]
        }
      case 'ADD_HYPES':
        const hypeForUpdate = state.posts.find((p) => p.id === action.payload || p.comments.id === action.payload)
        console.log({hypeForUpdate})
        hypeForUpdate.hypes+=1
        return{
          posts: [...state.posts]
        }
      // case 'SHOW_COMMENTS':
      //   return{
      //     posts: state.posts,
      //     showingComments: action.payload
      //   }
      default:
          return state;
  }
}
export default reducer