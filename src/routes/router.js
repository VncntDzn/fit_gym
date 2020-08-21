
import Home from '../views/Home';
import AboutUs from '../views/AboutUs';
import NotFound from '../components/NotFound';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: AboutUs,
    },
    {
        path: "*",
        component: NotFound
    }
];

export default routes;