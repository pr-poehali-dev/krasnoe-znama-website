
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Общее' },
    { path: '/vacancies', label: 'Вакансии' },
    { path: '/benefits', label: 'Преимущества работы у нас' },
    { path: '/events', label: 'События завода' },
  ];

  return (
    <nav className="p-4 md:p-6 w-full md:w-64 lg:w-72">
      <ul className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
        {navItems.map((item) => (
          <li key={item.path} className="w-full min-w-max">
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `block text-center py-3 px-4 rounded-full transition-colors
                 ${isActive 
                    ? 'bg-factory-red text-white font-medium shadow-md' 
                    : 'bg-factory-red/80 text-white hover:bg-factory-red'
                 }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
