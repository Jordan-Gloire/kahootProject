// components/Header.tsx
import { SparklesIcon } from "@heroicons/react/24/solid";
// import { UserIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const Header = () => (
  <Link
    href="/"
    className="flex items-center justify-between p-3 bg-indigo-700 text-white shadow-lg"
  >
    <div className="flex items-center space-x-2">
      <SparklesIcon className="w-8 h-8" />
      <span className="text-2xl font-bold">Jeux Interactifs</span>
    </div>
  </Link>
);

export default Header;
