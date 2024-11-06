"use client";
// pages/profil.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid"; // Assurez-vous d'utiliser la bonne version
import Header from "../components/Header";
const Profil = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Mon Profil</h2>
          <div className="flex flex-col items-center mb-4">
            <UserIcon className="w-24 h-24 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold">Gloire BAZOUNGOULAS</h3>
            <p className="text-gray-600">Développeur Front-End</p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Email :</span>
              <span className="text-gray-700">gloire@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Téléphone :</span>
              <span className="text-gray-700">066010436</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Date de naissance :</span>
              <span className="text-gray-700">01/01/2000</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300"
            onClick={() => alert("Modifier le profil")}
          >
            Modifier le Profil
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Profil;
