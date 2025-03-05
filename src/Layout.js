import React, { Suspense, lazy, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingRings from "./Components/Loader/Loader";

// Lazy load the components
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const SocialSideBar = lazy(() => import("./Pages/Social/SocialSideBar"));
const ScrollToTopButton = lazy(() => import("./Components/Navbar/ScrollToTopButton"));

const Layout = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000); // Delay of 1 second

        return () => clearTimeout(timer); // Cleanup timeout if component unmounts
    }, []);

    return (
        <>
            {showContent ? (
                <Suspense fallback={<LoadingRings />}>
                    <Navbar />
                    <Outlet /> {/* This renders the matched route's content */}
                    <Footer />
                    <SocialSideBar />
                    <ScrollToTopButton />
                </Suspense>
            ) : (
                <LoadingRings />
            )}
        </>
    );
};

export default Layout;
