"use client";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ labels, values }: { labels: string[]; values: number[] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Performance",
        data: values,
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        borderColor: "#2563eb",
        borderWidth: 1,
        pointBackgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      r: {
        beginAtZero: true,
        grid: { color: "#e5e7eb" },
        angleLines: { color: "#e5e7eb" },
        pointLabels: { color: "#374151", font: { size: 12 } },
        ticks: { display: false, stepSize: 20 },
      },
    },
  } as const;

  return <Radar data={data} options={options} />;
}
