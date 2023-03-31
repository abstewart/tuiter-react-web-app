import React from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks";
import {useEffect} from "react";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])


  return(
      <ul className="list-group">
        {loading &&
        <li className="list-group">
          Loading...
        </li>
        }
        {
          tuits.map(post =>
              <TuitItem
                  key={post._id} post={post} />
          )
        }
      </ul>
  );
};
export default TuitsList;