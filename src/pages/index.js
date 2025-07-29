


/*
import AdvisorsBackers from "./AdvisorsBackers";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";

import HelpCenter from "./HelpCenter";

import Home02 from "./Home02";
import Home03 from "./Home03";
import Nfts from "./Nfts";
import ParticipantAssets from "./ParticipantAssets";
import Partners from "./Partners";

import VisionsMission from "./VisionsMission";

*/
import Home from "./Home";
import Services from "./Services";

/*import About from "./About";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Contact from "./Contact";
*/

const routes = [
  { path: '/', component: <Home /> },
  //{ path: '/home-v2', component: <Home02 />},
  //{ path: '/home-v3', component: <Home03 />},
  { path: '/services', component: <Services /> },
  /*{ path: '/nfts', component: <Nfts />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/visions-mission', component: <VisionsMission />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/participants-assets', component: <ParticipantAssets />},
  { path: '/advisors-backers', component: <AdvisorsBackers />},
  { path: '/partners', component: <Partners />},

  { path: '/about', component: <About /> },
  { path: '/road-map', component: <RoadMap /> },
  { path: '/team', component: <Team /> },
  { path: '/contact', component: <Contact /> },
*/

]

export default routes;