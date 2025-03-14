import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import HotelMenu from "./components/HotelMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Applayout = () => {
    return (
        <div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>
    ) 
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: (
            <div>
                  <Header />
                <Error />
                <Footer />
            </div>
        ),
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/aboutus",
                element: <AboutUs />,
                
            },
            {
                path: "/contactus",
                element: <ContactUs />,
            },
            {
                path: "/hotelmenu/:resId",
                element: <HotelMenu />
            }

        ]
        
    },
    
])



const root = ReactDOM.createRoot(document.getElementById("myapp"));

//root.render(<Applayout />);
root.render(<RouterProvider router={appRouter}/>);
// venkatesh