import Nav from "../nav";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
import Explore from "./explore";


function Tuiter() {
  return (
      <div>
        <Nav/>
        <h1>Tuiter</h1>
        <Explore/>
      </div>
  )
}
export default Tuiter