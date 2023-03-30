import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";



const initialState = {
  tuits: [],
  loading: false
}



const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
              .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
              .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }
  },
  reducers: {
    // likeTuit(state, action) {
    //   const tuit = state.find((tuit) => {
    //     return tuit._id === action.payload._id;
    //   })
    //   tuit.liked ? tuit.likes -= 1 : tuit.likes += 1;
    //   tuit.liked = !tuit.liked;
    // },
    // deleteTuit(state, action) {
    //   const index = state
    //       .findIndex(tuit =>
    //           tuit._id === action.payload);
    //   state.splice(index, 1);
    // },
    // createTuit(state, action) {
    //   state.unshift({
    //     ...action.payload,
    //     ...templateTuit,
    //     _id: (new Date()).getTime(),
    //   })
    // }

  }
});


export default tuitsSlice.reducer;
export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;