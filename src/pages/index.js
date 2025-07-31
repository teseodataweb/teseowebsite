import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";



const routes = [
  { path: '/', component: <Home /> },
  { path: '/services', component: <Services /> },
  { path: '/portfolio', component: <Portfolio /> },
]

export default routes;