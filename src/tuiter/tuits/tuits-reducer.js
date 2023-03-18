import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa_logo.webp",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    likeTuit(state, action) {
      const tuit = state.find((tuit) => {
        return tuit._id === action.payload._id;
      })
      tuit.liked ? tuit.likes -= 1 : tuit.likes += 1;
      tuit.liked = !tuit.liked;
    },
    deleteTuit(state, action) {
      const index = state
          .findIndex(tuit =>
              tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }

  }
});


export default tuitsSlice.reducer;
export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;