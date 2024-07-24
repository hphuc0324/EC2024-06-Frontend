import * as layouts from 'layouts';
import * as pages from 'pages';

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
];

export default routes;
