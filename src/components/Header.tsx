
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-factory-peach py-8 text-center">
      <div className="container mx-auto px-4">
        <img 
          src="https://cdn.poehali.dev/files/471dc296-c094-462b-b429-c688c43384c6.jpg" 
          alt="Логотип Красное Знамя" 
          className="mx-auto h-32 md:h-40"
        />
      </div>
    </header>
  );
};

export default Header;
