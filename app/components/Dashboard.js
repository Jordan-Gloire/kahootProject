// components/Dashboard.js
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Maths', 'Physique', 'Histoire', 'Géographie'],
    datasets: [
      {
        label: 'Performance des élèves',
        data: [85, 90, 75, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance par matière',
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
