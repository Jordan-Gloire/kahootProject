"use client";
// pages/performance.tsx
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../components/Header";

// Enregistrement des échelles et des éléments
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformancePage: React.FC = () => {
  // Données fictives pour le graphique
  const data = {
    labels: ["Élève 1", "Élève 2", "Élève 3", "Élève 4", "Élève 5"],
    datasets: [
      {
        label: "Score",
        data: [85, 92, 78, 95, 88],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options pour le graphique
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Performances des Apprenants</h1>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default PerformancePage;
