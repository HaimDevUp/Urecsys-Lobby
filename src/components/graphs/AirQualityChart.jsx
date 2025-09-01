"use client"; // אם אתה ב-App Router של Next.js

import React, { useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AirQualityChart(props) {
    const chartRef = useRef(null);
    const { labels, points } = props;
    // נתוני הגרף
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Air Quality Scale",
                data: [220, 220],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    // גרדיאנט אופקי
                    const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                    gradient.addColorStop(0, "#286F4F");
                    gradient.addColorStop(0.25, "#00FF09");
                    gradient.addColorStop(0.5, "#FFFE35");
                    gradient.addColorStop(0.75, "#F80000");
                    gradient.addColorStop(1, "#8C4095");
                    return gradient;
                },
                borderWidth: 0.5,
                barPercentage: 0.6,
                categoryPercentage: 0.6,
                borderRadius: 20,
                borderSkipped: false,
            },
        ],
    };

    // אפשרויות גרף
    const options = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 0,
                max: 220,
                grid: {
                    display: true,
                    color: "#aaa", // צבע קווים
                    borderDash: (context) => (context.index === 0 ? [0, 0] : [5, 5]), // מקווקווים
                    drawTicks: true,
                    drawOnChartArea: true,
                },
                ticks: { stepSize: 20 },
                border: { display: false },
            },
            y: {
                grid: { display: false },
                ticks: { font: { size: 16 }, z: 1 },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    };

    return (
        <div className="urecsys-chart-wrapper">
            <div style={{ width: "100%", height: "100%" }}>
                <Bar ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
}
