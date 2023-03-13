import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../fontawesome';
import './index.css'
import TuitStats from "./tuit-stat";

const TuitItem = (
    {
      post = {
        "_id": -1,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex_logo.jpg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} className="float-end wd-img-round" src={`/images/${post.image}`} alt={`Img`}/>
          </div>
          <div className="col-10">
            <div>
              <span className="fw-bold">{post.userName}&nbsp;</span>
              <span className="fa-layers fa-xs">
                <FontAwesomeIcon icon="fa-certificate" size="lg" color="blue"/>
                <FontAwesomeIcon icon="fa-check" size="xs" inverse pull="left" />
              </span>
              <span className="text-secondary"> &nbsp;{post.handle} </span>
              <span className="text-secondary"> - {post.time}</span>
            </div>
            <div>{post.tuit}</div>
            <TuitStats post={post}/>
          </div>
        </div>
      </li>

  );
};
export default TuitItem;