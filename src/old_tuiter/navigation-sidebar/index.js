import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../fontawesome';
import '../index.css';
const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <>
        <div className="list-group">
          <div className="list-group-item">
            <FontAwesomeIcon icon="fa-brands fa-twitter" className="fab"/>
            {/*<i className="fab fa-twitter"></i>*/}
          </div>
          <a  href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'home'?'active':''}`}>
            <FontAwesomeIcon icon="fa-house" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-house"></i>*/}
            <span className="d-none d-xl-inline">Home</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'explore'?'active':''}`}>
            <FontAwesomeIcon icon="fa-hashtag" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-hashtag"></i>*/}
            <span className="d-none d-xl-inline">Explore</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'notifications'?'active':''}`}>
            <FontAwesomeIcon icon="fa-bell" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-bell"></i>*/}
            <span className="d-none d-xl-inline">Notifications</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'messages'?'active':''}`}>
            <FontAwesomeIcon icon="fa-envelope" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-envelope"></i>*/}
            <span className="d-none d-xl-inline">Messages</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'bookmarks'?'active':''}`}>
            <FontAwesomeIcon icon="fa-bookmark" className="fa-solid fa-fw"/>
            {/*<i className="fa fa-bookmark"></i>*/}
            <span className="d-none d-xl-inline">Bookmarks</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'lists'?'active':''}`}>
            <FontAwesomeIcon icon="fa-list-ul" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-list-ul"></i>*/}
            <span className="d-none d-xl-inline">Lists</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'profile'?'active':''}`}>
            <FontAwesomeIcon icon="fa-user" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-user"></i>*/}
            <span className="d-none d-xl-inline">Profile</span></a>
          <a href={`.`} className={`list-group-item list-group-item-action p-2 ${active === 'more'?'active':''}`}>
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon="fa-circle" className="fa-solid fa-stack1x"/>
              <FontAwesomeIcon icon="fa-ellipsis" className="fa-solid fa-stack1x fa-inverse"/>
              {/*<i className="fa-solid fa-circle fa-stack-1x"></i>*/}
              {/*<i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>*/}
            </span>
            <span className="d-none d-xl-inline">More</span>
          </a>
        </div>

        {/*Tuit Button*/}
        <div className="d-grid gap-2 mt-2">
          <button type="button" className="btn btn-primary wd-tuit-round-corner">
            Tuit
          </button>
        </div>
      </>
  );
};
export default NavigationSidebar;