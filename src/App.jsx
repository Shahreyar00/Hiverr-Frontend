import React from "react";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Gigs, Gig, Login, Register, Add, Orders, Messages, Message, MyGigs } from "./pages";

const App = () => {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/gigs",
                    element: <Gigs />,
                },
                {
                    path: "/myGigs",
                    element: <MyGigs />,
                },
                {
                    path: "/orders",
                    element: <Orders />,
                },
                {
                    path: "/messages",
                    element: <Messages />,
                },
                {
                    path: "/message/:id",
                    element: <Message />,
                },
                {
                    path: "/add",
                    element: <Add />,
                },
                {
                    path: "/gig/:id",
                    element: <Gig />,
                },
                {
                    path: "*",
                    element: <Navigate to="/" replace />,
                }
            ],
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return <RouterProvider router={router} />;

}

export default App