"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineChart({ labels, values }: { labels: string[]; values: number[] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Readiness",
        data: values,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        pointRadius: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { color: "#f3f4f6" },
        ticks: { color: "#374151" },
      },
      y: {
        grid: { color: "#e5e7eb" },
        ticks: { color: "#374151" },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  } as const;

  return <Line data={data} options={options} />;
}
