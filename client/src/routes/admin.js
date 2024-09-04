import * as pages from 'pages';
import * as layouts from 'layouts';
import { element } from 'prop-types';
const adminRoutes = [
    {
        path: '/admin',
        element: pages.AdminPage,
        layout: layouts.AdminLayout,
    },
    {
        path: '/admin/products',
        element: pages.AdminProduct,
        layout: layouts.AdminLayout,
    },
    {
        path: '/admin/users',
        element: pages.AdminUser,
        layout: layouts.AdminLayout,
    },
    {
        path: '/admin/categories',
        element: pages.AdminCategory,
        layout: layouts.AdminLayout,
    },
];

export default adminRoutes;
