"use client";
// pages/create-game.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
interface SchoolFormData {
  libelle: string;
  adresse: string;
  ville: string;
  telephone: string;
  email: string;
  fichier: string; // On permet le fichier de type File ou null
  admin: string;
  pays: string;
}

const CreateSchool: React.FC = () => {
  const [formData, setFormData] = useState<SchoolFormData>({
    libelle: "",
    adresse: "",
    ville: "",
    telephone: "",
    email: "",
    fichier: "", // Initialisé à null
    admin: "",
    pays: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const notify = () => toast("L'ecole a étè ajoute avec success !");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Traitement du formulaire (soumission, validation, etc.)
    const dataToSend = {
      libelle: formData.libelle,
      adresse: formData.adresse,
      ville: formData.ville,
      telephone: formData.telephone,
      email: formData.email,
      fichier: formData.fichier,
      admin: formData.admin,
      pays: formData.pays,
    };
    console.log("Form Data:", dataToSend);

    try {
      const response = await fetch("api/addecole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.text(); // Capture error response as text
        console.error("Error Response:", errorData); // Log the error response for debugging
        throw new Error(
          errorData || "Erreur lors de l'enregistrement du professeur"
        );
      }

      const data = await response.json();
      console.log("Response Data:", data); // Log the success response
      notify();
    } catch (error: unknown) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : String(error)
      );
    }
  };

  return (
    <>
      <Header />
      <div className="pt-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <motion.div
          className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
            {"Inscription d'une École"} 🏫
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Libellé */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Libellé
              </label>
              <input
                type="text"
                name="libelle"
                value={formData.libelle}
                onChange={handleChange}
                placeholder="Entrez le libellé de l'école"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Entrez l'adresse de l'école"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Ville */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ville
              </label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                placeholder="Entrez la ville"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Ex: +242 066010436"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@mail.com"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Fichier */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fichier
              </label>
              <input
                type="text"
                name="fichier"
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Admin */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admin
              </label>
              <input
                type="text"
                name="admin"
                value={formData.admin}
                onChange={handleChange}
                placeholder="Nom de l'administrateur"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Pays */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pays
              </label>
              <input
                type="text"
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                placeholder="Entrez le pays"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"Enregistrer l'École"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default CreateSchool;
