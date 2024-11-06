"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
interface ProfFormData {
  name: string;
  phone: string;
  email: string;
  statut: string;
  ecole: string;
  password: string;
}

const RegisterProf: React.FC = () => {
  const [formData, setFormData] = useState<ProfFormData>({
    name: "",
    phone: "",
    email: "",
    statut: "",
    ecole: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const notify = () => toast("Utilisateur créé avec succès !");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Préparez les données pour l'envoi
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      statut: formData.statut,
      password: formData.password,
      ecole: formData.ecole,
    };
    console.log("Form Data:", dataToSend); // Log form data before sending

    try {
      const response = await fetch("api/addprof", {
        method: "POST",
        // mode: "no-cors",
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
            {"Inscription d'un Nouveau Professeur"} 🧑‍🏫
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez le nom du professeur"
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
                name="phone"
                value={formData.phone}
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

            {/* École */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                École
              </label>
              <input
                type="text"
                name="ecole"
                value={formData.ecole}
                onChange={handleChange}
                placeholder="Nom de l'école"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Entrez le mot de passe"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Statut */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Statut
              </label>

              <input
                value={formData.statut}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                type="text"
                name="statut"
                placeholder="statut"
              />
            </div>

            {/* Bouton de soumission */}
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enregistrer le Professeur
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

export default RegisterProf;
