import Products from '../containers/Products';
import Settings from "../containers/Settings";
import ProductDetails from "../containers/ProductDetails";
import SignIn from '../components/Auth/SignIn';


// these are our app routes and thier respective components
const Routes = [
    {
        path: '/auth/signin',
        name: 'Sign in',
        component: SignIn,
    },
    {
        path: '/',
        name: 'Home',
        component: Products,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/products/:slug',
        name: 'View product',
        component: ProductDetails,
    },
];

export default Routes;