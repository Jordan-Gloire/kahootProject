// Importations nécessaires
import { motion } from "framer-motion";
import React from "react";

// Définition du type des props
interface CardStatProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

// Composant CardStat
const CardStat: React.FC<CardStatProps> = ({ title, value, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center p-6 bg-white rounded-lg shadow-md space-x-4"
  >
    <div className="p-4 bg-indigo-100 rounded-full">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  </motion.div>
);

export default CardStat;
