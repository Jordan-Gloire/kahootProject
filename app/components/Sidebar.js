// components/Sidebar.js
import { useState } from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon className="h-6 w-6" /> },
    { name: 'Utilisateurs', icon: <UserIcon className="h-6 w-6" /> },
    { name: 'Paramètres', icon: <CogIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-full">
      <h2 className="text-2xl font-bold p-4">Dashboard</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`p-4 cursor-pointer ${
              active === item.name ? 'bg-gray-200' : ''
            }`}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
