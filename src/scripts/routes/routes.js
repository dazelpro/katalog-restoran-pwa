import Home from '../pages/home';
import Detail from '../pages/detail';
 
const routes = {
    '/': Home,
    '/detail/:id': Detail,
    // '/upcoming': Upcoming,
    // '/detail/:id': Detail,
};
 
export default routes;