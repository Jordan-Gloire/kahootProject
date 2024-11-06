"use client";
import {
  HomeIcon,
  UserIcon,
  SparklesIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"; // Import the new icon
import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { title: "Accueil", icon: <HomeIcon className="w-6 h-6" />, path: "/" },
    {
      title: "Profil",
      icon: <UserIcon className="w-6 h-6" />,
      path: "/profil",
    },
    {
      title: "Statistiques",
      icon: <SparklesIcon className="w-6 h-6" />,
      path: "/performance",
    },
    {
      title: "Enseignants",
      icon: <AcademicCapIcon className="w-6 h-6" />,
      path: "/enseignants",
    }, // New item added
    // Add more menu items here if needed
  ];

  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h1 className="text-xl font-bold mb-6">Mon Dashboard</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className="flex items-center space-x-2 mb-4">
            <Link
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
              href={item.path}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
