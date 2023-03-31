import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    const postItems = posts.map(pi => PostSummaryItem(pi)).join('');
    return(`
    <div class="list-group">
      ${postItems}
    </div>
    `)
}
export default PostSummaryList;

function renderPostSummaryList() {
    $('#psl').append(PostSummaryList);

}
$(renderPostSummaryList)