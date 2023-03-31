import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../fontawesome';
import '../index.css';

// const exampleListItem = {
//   avatarIcon: '../../images/virgin_logo.svg',
//   userName: 'Virgin Galactic',
//   handle: 'virgingalactic',
//
// }

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa_logo.webp'}
    }
) => {
  const {avatarIcon, userName, handle} = who;

  return (
    <div className="list-group-item">
            <div className="row">
              <div className="col-2">
                <img className="wd-image-bigger-shift-round" src={`/images/${avatarIcon}`} alt="icon"/>
              </div>
              <div className="col-6 col-xl-7">
                <div className="fw-bold">
                <span>{userName}</span>
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon="fa-certificate" className="fa-solid fa-stack-1x"/>
                    <FontAwesomeIcon icon="fa-check" className="fa-solid fa-stack-1x fa-inverse"/>
                  </span>
                </div>
                <div className="">@{handle}</div>
              </div>
              <div className="col-4 col-xl-3 my-auto">
                <div className="d-grid gap-2 mx-auto">
                  <button type="button" className="btn btn-primary wd-follow-btn-rounded-smaller py-1">
                    Follow</button>
                </div>
              </div>
            </div>
          </div>
    )
}
export default WhoToFollowListItem;