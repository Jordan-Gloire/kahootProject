// pages/index.js
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
  );
}
