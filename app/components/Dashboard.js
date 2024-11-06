"use client";
// pages/dashboard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  PlayIcon,
  ChartBarIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

// Enregistrer les composants Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);
import CardStat from "../components/CardStat";
import Header from "./Header";

const Dashboard = () => {
  const [gameCount, setGameCount] = useState(12); // Exemple de statistique

  const chartData = {
    labels: ["Jeu 1", "Jeu 2", "Jeu 3", "Jeu 4"],
    datasets: [
      {
        label: "Scores",
        data: [80, 90, 60, 70],
        backgroundColor: ["#34D399", "#F59E0B", "#3B82F6", "#EF4444"],
      },
    ],
  };

  return (
    <div className="p-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 min-h-screen">
      {/* Header du Dashboard */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700">
          🎮 Dashboard - Jeux Interactifs
        </h1>
        <Link
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500"
          href="/create-game"
        >
          Ajouter une Ecole
        </Link>
        <Link
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500"
          href="/ajouterProf"
        >
          Ajouter un Enseignant
        </Link>
      </div>

      {/* Statistiques Globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <CardStat
          title="Nombre d'élèves"
          value={120}
          icon={<UserIcon className="h-8 w-8 text-indigo-600" />}
        />
        <CardStat
          title="Jeux créés"
          value={15}
          icon={<HomeIcon className="h-8 w-8 text-indigo-600" />}
        />
        <CardStat
          title="Performance moyenne"
          value={85}
          icon={<UserIcon className="h-8 w-8 text-indigo-600" />}
        />
      </div>

      {/* Graphique des performances */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Performances Récentes
        </h2>
        <Bar data={chartData} />
      </motion.div>
    </div>
  );
};

export default Dashboard;
