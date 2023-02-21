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
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-house" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-house"></i>*/}
            <span className="d-none d-xl-inline">Home</span></a>
          <a href="#" className="list-group-item list-group-item-action active">
            <FontAwesomeIcon icon="fa-hashtag" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-hashtag"></i>*/}
            <span className="d-none d-xl-inline">Explore</span></a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-bell" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-bell"></i>*/}
            <span className="d-none d-xl-inline">Notifications</span></a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-envelope" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-envelope"></i>*/}
            <span className="d-none d-xl-inline">Messages</span></a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-bookmark" className="fa-solid fa-fw"/>
            {/*<i className="fa fa-bookmark"></i>*/}
            <span className="d-none d-xl-inline">Bookmarks</span></a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-list-ul" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-list-ul"></i>*/}
            <span className="d-none d-xl-inline">Lists</span></a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon="fa-user" className="fa-solid fa-fw"/>
            {/*<i className="fa-solid fa-user"></i>*/}
            <span className="d-none d-xl-inline">Profile</span></a>
          <a href="#" className="list-group-item list-group-item-action ps-2">
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
  )
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
          Home
        </a>
        <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          Explore
        </a>
        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          Notifications
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          Messages
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          Bookmarks
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          Lists
        </a>
        <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          Profile
        </a>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>
  );
};
export default NavigationSidebar;