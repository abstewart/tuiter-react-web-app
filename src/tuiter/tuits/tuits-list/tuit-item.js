import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../fontawesome';
import './index.css'

const TuitItem = (
    {
      post = {
        "_id": 234,
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
              <span><b>{post.userName}</b> </span>
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon="fa-certificate" className="fa-solid fa-stack-1x"/>
                <FontAwesomeIcon icon="fa-check" className="fa-solid fa-stack-1x fa-inverse"/>
              </span>
              <span> {post.handle} </span>
              <span> - {post.time}</span>
            </div>
            <div className="fw-bolder">{post.topic}</div>
            <div>{post.title}</div>
          </div>
        </div>
      </li>

  );
};
export default TuitItem;