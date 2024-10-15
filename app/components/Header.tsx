// components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg transition duration-300 ease-in-out">
      <Link href="/" className="flex items-center">
        <Image
          height={90}
          width={90}
          src="/logo.svg" // Remplace par le chemin de ton logo
          alt="Logo"
          className="h-20 w-auto mr-2 transition-transform duration-300 ease-in-out transform hover:scale-110" // Animation de l'logo
        />
        <h1 className="text-lg font-bold hover:underline transition duration-300 ease-in-out">
          Khoot
        </h1>
      </Link>
      <nav>
        {/* Tu peux ajouter des liens de navigation ici avec des animations */}
      </nav>
    </header>
  );
};

export default Header;
