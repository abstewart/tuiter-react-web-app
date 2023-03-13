import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {likeTuit} from "../tuits-reducer";
import '../../../fontawesome';
import {useDispatch} from "react-redux";



const TuitStats = (
    {
      post = {
        "liked": false,
        "replies": -1,
        "retuits": -1,
        "likes": -1
      }
    }) => {
  const dispatch = useDispatch();
  const toggleLikedTuit = (tuit) => {
    console.log("click")
    dispatch(likeTuit(tuit));
  }
  return(
      <>
        <div className="row">
          <div className="col-3">
            <FontAwesomeIcon icon="fa-regular fa-comment"/>
            <span> {post.replies}</span>
          </div>
          <div className="col-3">
            <FontAwesomeIcon icon="fa-arrows-rotate"/>
            <span> {post.retuits}</span>
          </div>
          <div className="col-3" onClick={() => toggleLikedTuit(post)}>
            <FontAwesomeIcon icon="fa-heart" color={post.liked ? "red" : "black"}/>
            <span> {post.likes}</span>
          </div>
          <div className="col-3">
            <FontAwesomeIcon icon="fa-share-nodes"/>
          </div>
        </div>
      </>
  )
}
export default TuitStats;