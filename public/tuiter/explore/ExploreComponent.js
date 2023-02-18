import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
         <div class="mb-2">
          <div class="row">
            <div class="col-11 position-relative">
              <input type="text"
                     class="form-control wd-search-corners ps-5"
                     id="search_input"
                     placeholder="Search Tuiter">
              <div class="position-absolute top-0 start-0 ms-4 mt-2">
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
              </div>
            </div>
            <div class="col-1">
              <div class="mt-2">
                <a href="#" class="mt-5">
                  <i class="fa-solid fa-gear fa-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
           
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>
        <!--Image with overlaid text-->
        <div class="mt-1 position-relative">
          <img class="img-fluid" src="../../images/spacex_starship.webp" alt="Spacex starship">
          <span class="fs-3 text-white position-absolute bottom-0 start-0 ps-1">SpaceX's Starship</span>
        </div>
        
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;