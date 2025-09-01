"use client"; // אם אתה עובד עם App Router ב־Next.js

import React, { useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const getMinValue = (context) => {
    const chart = context.chart;
    const data = chart.data.datasets.flatMap(dataset => dataset.data);
    const minValue = Math.min(...data);
    return Math.floor((minValue) / 2.5) * 2.5;
}

const getMaxValue = (context) => {
    const chart = context.chart;
    const data = chart.data.datasets.flatMap(dataset => dataset.data);
    const maxValue = Math.max(...data);
    return Math.ceil((maxValue + 2.5) / 2.5) * 2.5;
}


export default function IndoorOutdoorChart(params) {
    const chartRef = useRef(null);

    const labels = Array.from({ length: 40 }, (_, i) => i + 1);

    const data = {
        labels,
        datasets: [
            {
                label: params.data[0].label,
                data: params.data[0].datasets,
                borderColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(
                        0, chartArea.bottom,
                        0, chartArea.top
                    );
                    gradient.addColorStop(0, params.data[0].colors[1]);
                    gradient.addColorStop(0.5, params.data[0].colors[2]);
                    
                    return gradient;
                },
                tension: 0.5,
                pointRadius: 0,
                borderWidth: 2,
                pointBackgroundColor: params.data[0].colors[0], // צבע הקובייה בלג'נד
                pointBorderColor: params.data[0].colors[0],
            },
            {
                label: params.data[1].label,
                data: params.data[1].datasets,
                borderColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(
                        0, chartArea.bottom,
                        0, chartArea.top
                    );
                    gradient.addColorStop(0.5, params.data[1].colors[1]);
                    gradient.addColorStop(1, params.data[1].colors[2]);

                    return gradient;
                },
                tension: 0.5,
                pointRadius: 0,
                borderWidth: 2,
                pointBackgroundColor: params.data[1].colors[0],
                pointBorderColor: params.data[1].colors[0],

            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'center',
                padding: 20,
                labels: {
                    usePointStyle: false,
                    boxWidth: 28,
                    boxHeight: 14,
                    generateLabels(chart) {
                        const base = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
                        const colors = [params.data[0].colors[0], params.data[1].colors[0]];
                        return base.map(l => ({
                            ...l,
                            fillStyle: colors[l.datasetIndex],
                            strokeStyle: colors[l.datasetIndex],
                            lineWidth: 0,
                        }));
                    },
                },
            },
            tooltip: { enabled: true },
        },

        scales: {
            y: {
                min: (context) => {
                    getMinValue(context);
                },
                max: (context) => {
                    getMaxValue(context);
                },
                grid: { drawBorder: false },
                ticks: {
                    stepSize: 2.5,
                    callback: function (value, index, values) {
                        const data = this.chart.data.datasets.flatMap(dataset => dataset.data);
                        const minValue = Math.min(...data);
                        const minTick = Math.floor((minValue) / 2.5) * 2.5;

                        if (value === minTick) return '0';
                        return value;
                    }
                },
            },
            x: {
                grid: { drawBorder: false },
                ticks: { stepSize: 1 },
            },
        },
        interaction: {
            intersect: false,
            mode: "index",
        },
    };

    return (
        <div className="urecsys-chart-wrapper">
            <div style={{ width: "100%", height: "100%" , flex: 1}}>
                <Line ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
}
