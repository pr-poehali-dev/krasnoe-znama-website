
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MainTitle from './MainTitle';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainTitle />
      <div className="flex flex-col md:flex-row flex-grow">
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
