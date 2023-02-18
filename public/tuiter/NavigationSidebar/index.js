const NavigationSidebar = () => {
    return(`
        <div class="list-group">
          <div class="list-group-item"><i class="fab fa-twitter"></i></div>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-house"></i> 
            <span class="d-none d-xl-inline">Home</span></a>
          <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa-solid fa-hashtag"></i> 
            <span class="d-none d-xl-inline">Explore</span></a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bell"></i> 
            <span class="d-none d-xl-inline">Notifications</span></a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-envelope"></i> 
            <span class="d-none d-xl-inline">Messages</span></a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bookmark"></i> 
            <span class="d-none d-xl-inline">Bookmarks</span></a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-list-ul"></i> 
            <span class="d-none d-xl-inline">Lists</span></a>
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-user"></i> 
            <span class="d-none d-xl-inline">Profile</span></a>
          <a href="#" class="list-group-item list-group-item-action">
          <span class="fa-stack small">
            <i class="fa-solid fa-circle fa-stack-1x"></i>
            <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
          </span>
            <span class="d-none d-xl-inline">More</span>
          </a>
        </div>
        <!--  Tuit button-->
        <div class="d-grid gap-2 mt-2">
          <button type="button" class="btn btn-primary wd-tuit-round-corner">
            Tuit</button>
        </div>
    `);
}

export default NavigationSidebar;


function renderNavBar() {
    $('#nav-sidebar').append(NavigationSidebar);

}
$(renderNavBar)


