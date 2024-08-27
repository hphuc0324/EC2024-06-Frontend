import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import AdminRoute from 'components/AdminRoute';

import routes from 'routes';

import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import adminRoutes from 'routes/admin';
import UserRoute from 'components/UserRoute';

function App() {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <ToastContainer />
            <Routes>
                {routes.map((route, index) => {
                    const Layout = route.layout ? route.layout : Fragment;
                    const Page = route.element;
                    const Element = route.authen ? (
                        <UserRoute>
                            <Layout>
                                <Page />
                            </Layout>
                        </UserRoute>
                    ) : (
                        <Layout>
                            <Page />
                        </Layout>
                    );

                    return <Route key={index} path={route.path} element={Element} />;
                })}

                {adminRoutes.map((adminRoute, index) => {
                    const Layout = adminRoute.layout ? adminRoute.layout : Fragment;

                    const Page = adminRoute.element;
                    return (
                        <Route
                            key={index}
                            path={adminRoute.path}
                            element={
                                <AdminRoute>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </AdminRoute>
                            }
                        ></Route>
                    );
                })}

                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </div>
    );
}

export default App;
