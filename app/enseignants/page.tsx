"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

interface ProfFormData {
  name: string;
  phone: string;
  email: string;
  statut: string;
  ecole: string;
  password: string;
}

const ManageTeachers: React.FC = () => {
  const [formData, setFormData] = useState<ProfFormData>({
    name: "",
    phone: "",
    email: "",
    statut: "",
    ecole: "",
    password: "",
  });
  const [action, setAction] = useState<"add" | "edit" | "delete" | "">("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const notify = () => toast("Utilisateur créé avec succès !");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const dataToSend = { ...formData };

    try {
      const response = await fetch("api/addprof", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.text();
        toast.error("Erreur lors de l'enregistrement. Veuillez réessayer.");
        throw new Error(errorData);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      notify();
      window.location.reload();
    } catch (error: unknown) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : String(error)
      );
      toast.error("Une erreur est survenue lors de la soumission.");
    } finally {
      setIsLoading(false);
    }
  };

  //   const handleSearch = async () => {
  //     if (!searchTerm.trim()) {
  //       toast.warn("Veuillez entrer un nom pour rechercher un enseignant");
  //       return;
  //     }

  //     try {
  //       const response = await fetch(
  //         `/api/addprof?name=${encodeURIComponent(searchTerm)}`,
  //         {
  //           method: "GET",
  //         }
  //       );

  //       if (!response.ok) {
  //         const errorData = await response.text();
  //         console.error("Erreur de recherche:", errorData);
  //         toast.error("Erreur lors de la recherche de l'enseignant.");
  //         return;
  //       }

  //       const data = await response.json();
  //       console.log("Résultats de la recherche:", data);
  //     } catch (error) {
  //       console.error("Erreur lors de la recherche de l'enseignant:", error);
  //       toast.error("Erreur lors de la recherche de l'enseignant.");
  //     }
  //   };
  //   const handleSearch = async () => {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGUzOGJiYTFlZGIzZmU1NjczMzEyOCIsImlhdCI6MTczMDczNzc5NCwiZXhwIjoxNzMwNzQ0OTk0fQ.39rYQKdXD6Z2LIu72CfD1gw6bcmAeuyH2UBLbZghWQA";

  //     try {
  //       const response = await fetch(
  //         `/api/addprof?name=${encodeURIComponent(searchTerm)}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`, // Ajout du token dans l'en-tête Authorization
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         const errorText = await response.text();
  //         console.error("Erreur de recherche:", errorText);
  //         return;
  //       }

  //       const data = await response.json();
  //       console.log("Données reçues:", data);
  //     } catch (error) {
  //       console.error("Erreur lors de la requête :", error);
  //     }
  //   };
  const handleSearch = async () => {
    // Récupération du token stocké dans le localStorage
    const token = localStorage.getItem("authToken");

    // Vérifiez si le token est présent
    if (!token) {
      console.error(
        "Token d'authentification manquant. Veuillez vous connecter."
      );
      return; // Arrêtez la fonction si le token est absent
    }

    try {
      const response = await fetch(
        `/api/addprof?name=${encodeURIComponent(searchTerm)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ajouter le token dans l'en-tête Authorization
            "Content-Type": "application/json",
          },
        }
      );

      // Gérer les erreurs de réponse
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erreur de recherche:", errorText);
        return;
      }

      // Traitement de la réponse JSON
      const data = await response.json();
      // Stockez le token dans localStorage
      localStorage.setItem("authToken", data.token);
      console.log("Données reçues:", data);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
        <h1 className="text-3xl font-bold text-white mb-6">
          Gestion des Enseignants
        </h1>

        <div className="mb-6 w-full max-w-md flex items-center space-x-2">
          <input
            type="text"
            placeholder="Rechercher un enseignant"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
          >
            Rechercher
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {["add", "edit", "delete"].map((act) => (
            <motion.button
              key={act}
              onClick={() => setAction(act as "add" | "edit" | "delete")}
              className="bg-white p-4 rounded-lg shadow-lg w-32 text-center font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {act === "add"
                ? "Ajouter"
                : act === "edit"
                ? "Modifier"
                : "Supprimer"}
            </motion.button>
          ))}
        </div>

        {action && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              {action === "add"
                ? "Ajouter un Enseignant"
                : action === "edit"
                ? "Modifier un Enseignant"
                : "Supprimer un Enseignant"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["add", "edit"].includes(action) && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Téléphone"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="ecole"
                    placeholder="École"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="statut"
                    placeholder="Statut"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </>
              )}
              {action === "delete" && (
                <input
                  type="text"
                  name="name"
                  placeholder="Nom de l'enseignant à supprimer"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              )}

              <motion.button
                type="submit"
                className={`w-full p-3 rounded-md text-white ${
                  action === "add"
                    ? "bg-green-600"
                    : action === "edit"
                    ? "bg-yellow-600"
                    : "bg-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {action === "add"
                  ? "Ajouter"
                  : action === "edit"
                  ? "Modifier"
                  : "Supprimer"}
              </motion.button>
            </form>
          </motion.div>
        )}
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

export default ManageTeachers;
