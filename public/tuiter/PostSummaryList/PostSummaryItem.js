const PostSummaryItem = (post) => {
    const {topic, userName, time, image, title} = post;
    return(`
    <div class="list-group-item">
            <div class="row">
              <!--  Tuit stuff-->
              <div class="col-10">
                <div class="text-secondary">${topic}</div>
                <div>
                  <span class="fw-bold">${userName}</span>
                  <span class="fa-stack small">
                    <i class="fa-solid fa-certificate fa-stack-2x"></i>
                    <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                  </span>
                  <span class="text-secondary">- ${time}</span>
                </div>
                <div class="fw-semibold">
                  ${title}
                </div>

              </div>
              <!-- Image on right of tuit-->
              <div class="col-2">
                <img class="img-fluid wd-tuit-img-rounded-corner" src=${image} alt="image">
              </div>
            </div>
          </div>
    `)
}

export default PostSummaryItem;


const examplePostSummaryItem = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "image": "../../images/react_blue_icon.png",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
}

function renderPostSummaryItem() {
    $('#psi').append(PostSummaryItem(examplePostSummaryItem));

}
$(renderPostSummaryItem)