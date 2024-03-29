import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { posts } from '../data';

const initialState = {
  posts: posts
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   function addNewPost(post) {
       dispatch({
           type: 'ADD_POST',
           payload: post
       });
   }
   function addNewComment({postId, comment}) {
       dispatch({
           type: 'ADD_COMMENT',
           payload: {postId, comment}
       });
   }
   function incrementHypes(id) {
        dispatch({
            type: 'ADD_HYPES',
            payload: id
        });
    }
    // function showComments(isShowing) {
    //     dispatch({
    //         type: 'SHOW_COMMENTS',
    //         payload: isShowing
    //     });
    // }

   return(
      <GlobalContext.Provider value = {{posts : state.posts, addNewPost, addNewComment, incrementHypes }}> 
        {children} 
      </GlobalContext.Provider>
   )
}