"use client";
// components/Sidebar.js
// import { useState } from 'react';
// import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold h-full w-64 p-5">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <ul>
        <li className="mb-4">
          <Link className="hover:text-black duration-500 ease-in-out" href="/create-game">
            Créer un Jeu
          </Link>
        </li>
        <li className="mb-4">
          <Link className="hover:text-black duration-500 ease-in-out" href="/performance/">
            Voir les Performances
          </Link>
        </li>
        {/* Ajoute d'autres liens si nécessaire */}
      </ul>
    </div>
  );
};


export default Sidebar;
