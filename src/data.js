import avatar from './assets/avatar.svg';
import uuid from 'react-uuid'

export const posts = [
  {
    id: "1",
    timeStamp: new Date(),
    text: "It's a-me, Mario!",
    hypes: 2,
    comments: [
      {
        id: "1-1",
        timeStamp: new Date(),
        text: "ha ha",
        hypes: 0,
        replies: 0,
        shares: 0,
        user: {
          name: "Luigi",
          avatar: avatar,
        }
      },
      {
        id: "1-2",
        timeStamp: new Date(),
        text: "Mario!!!",
        hypes: 2,
        replies: 3,
        shares: 1,
        user: {
          name: "Luigi",
          avatar: avatar,
        }
      }
    ],
    shares: 15,
    views: 110,
    user: {
      name: "Mario",
      avatar: avatar
    },   
  },
  {
    id: "2",
    timeStamp: new Date(),
    text: "Hui hew! Just what I needed!",
    hypes: 58,
    comments: [],
    shares: 63,
    views: 101,
    user: {
      name: "Mario",
      avatar: avatar
    }, 
  }
]