import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Tuiter() {
  const a = 10;
  return (
      <div>
        <Nav/>
        <FontAwesomeIcon icon={['fa', 'certificate']}/>
        <h1>Tuiter</h1>
      </div>
  )
}
export default Tuiter