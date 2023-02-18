
const exampleListItem = {
    avatarIcon: '../../images/virgin_logo.svg',
    userName: 'Virgin Galactic',
    handle: 'virgingalactic',

}

const WhoToFollowListItem = who => {
    const {avatarIcon, userName, handle} = who;

    return (`
    <div class="list-group-item">
            <div class="row">
              <div class="col-2">
                <img class="wd-image-bigger-shift-round" src=${avatarIcon} alt="icon">
              </div>
              <div class="col-6 col-xl-7">
                <div class="fw-bold">
                <span>${userName}</span>
                  <span class="fa-stack">
                    <i class="fa-solid fa-certificate fa-stack-1x"></i>
                    <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
                <div class="">${handle}</div>
              </div>
              <div class="col-4 col-xl-3 my-auto">
                <div class="d-grid gap-2 mx-auto">
                  <button type="button" class="btn btn-primary wd-follow-btn-rounded-smaller py-1">
                    Follow</button>
                </div>
              </div>
            </div>
          </div>
    `)
}
export default WhoToFollowListItem;


function renderWhoToFollowListItem() {
    $('#wtfli').append(WhoToFollowListItem(exampleListItem));

}
$(renderWhoToFollowListItem)