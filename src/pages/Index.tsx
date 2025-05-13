
import React from 'react';
import Header from '../components/Header';
import MainTitle from '../components/MainTitle';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainTitle />
      <Content />
      <Footer />
    </div>
  );
};

export default Index;
