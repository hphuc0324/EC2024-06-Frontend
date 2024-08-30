import * as layouts from 'layouts';
import * as pages from 'pages';
import { element } from 'prop-types';

const routes = [
    {
        path: '/',
        element: pages.HomePage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/auth/login',
        element: pages.LoginPage,
    },
    {
        path: '/auth/register',
        element: pages.RegisterPage,
    },
    {
        path: '/about',
        element: pages.AboutPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/contact',
        element: pages.ContactPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/search',
        element: pages.SearchPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: 'category',
        element: pages.CategoryPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/product/:_id',
        element: pages.ProductPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/cart',
        element: pages.CartPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/payment',
        element: pages.PaymentPage,
        layout: layouts.DefaultLayout,
    },
    {
        path: '/profile',
        element: pages.ProfilePage,
        layout: layouts.DefaultLayout,
        authen: true,
    },
    {
        path: '/profile/info',
        element: pages.UserProfilePage,
        layout: layouts.DefaultLayout,
        authen: true,
    },
    {
        path: '/profile/orders',
        element: pages.ProfilePage,
        layout: layouts.DefaultLayout,
        authen: true,
    },
];

export default routes;
