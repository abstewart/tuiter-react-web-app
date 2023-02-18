import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {

    const listItems = who.map(user => WhoToFollowListItem(user)).join('')
    return (`
      <div class="list-group">
        <div class="list-group-item"><b>Who to follow</b></div>
        ${listItems}
      </div>
`)
}

export default WhoToFollowList;

function drawWTFL() {
    $('#wtfl').append(WhoToFollowList);
}
$(drawWTFL);

