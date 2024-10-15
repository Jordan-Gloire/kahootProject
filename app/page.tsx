// pages/index.js
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header /> {/* Intégration du Header ici */}
        <div className="p-6 flex-1">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
