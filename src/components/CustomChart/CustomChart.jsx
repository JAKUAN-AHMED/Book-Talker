import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend
);

const CustomChart = ({ books }) => {
  const data = {
    labels: books.map((book) => book.bookName),
    datasets: [
      {
        label: "Total Pages",
        data: books.map((book) => book.totalPages),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Custom chart of read books",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
          beginAtZero: true,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CustomChart;
