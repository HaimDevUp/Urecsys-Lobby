"use client"; 

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Co2Chart({ data }) {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", 
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    layout: { padding: 20 },
    animation: {
      animateRotate: true,
      animateScale: false,
    },
  };

  return (
    <div className="urecsys-co2-chart">
      <div style={{ width: "100px", height: "100px" }}>
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="urecsys-co2-chart--percentage">
        {data.datasets[0].data[0].toFixed(2)}%
      </div>
    </div>
  );
}
