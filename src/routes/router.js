
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
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