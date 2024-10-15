"use client";
// pages/create-game.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface GameFormData {
  title: string;
  description: string;
  level: string;
  type: string;
}

const CreateGame: React.FC = () => {
  const [formData, setFormData] = useState<GameFormData>({
    title: "",
    description: "",
    level: "easy",
    type: "quizz",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Jeu créé avec succès:", formData);
    // Logique de soumission (API ou autre)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <motion.div
        className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Créer un Nouveau Jeu 🎮
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Titre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Titre du Jeu
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Quiz sur JavaScript"
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez brièvement le jeu..."
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  resize-none"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Niveau de difficulté */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Niveau de difficulté
            </label>
            <div className="relative mt-2">
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
              >
                <option value="easy">Facile</option>
                <option value="medium">Moyen</option>
                <option value="hard">Difficile</option>
              </select>
              <span className="absolute right-3 top-2.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 10l5 5 5-5H7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Type de Jeu */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type de Jeu
            </label>
            <div className="relative mt-2">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
              >
                <option value="quizz">Quizz</option>
                <option value="qcm">QCM</option>
                <option value="puzzle">Puzzle</option>
                <option value="memory">Memory</option>
                <option value="jeu-de-role">Jeu de Rôle</option>
              </select>
              <span className="absolute right-3 top-2.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 10l5 5 5-5H7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Bouton de soumission */}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Créer le Jeu
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateGame;
