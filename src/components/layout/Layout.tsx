import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AnimatedPageBackground } from '../animations/AnimatedPageBackground';
import ScrollToTop from '../common/ScrollToTop';
import ScrollOnNavigate from '../common/ScrollOnNavigate';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedPageBackground />
      <ScrollOnNavigate />
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
