import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
    }
  }
});


export default tuitsSlice.reducer;
export const {likeTuit} = tuitsSlice.actions;