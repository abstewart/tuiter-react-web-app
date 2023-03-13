import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const postsArray = useSelector(state => state.tuits);
  return(
      <div className="list-group">
        {
          postsArray.map(post =>
              <TuitItem
                  key={post._id} post={post} />
          )
        }
      </div>
  );
};
export default TuitsList;