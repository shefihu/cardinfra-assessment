// WeeklyIncome.tsx
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface WeeklyIncomeProps {
  className?: string;
}

interface WeeklyData {
  day: string;
  income: number;
}

const WeeklyIncome: React.FC<WeeklyIncomeProps> = ({ className = "" }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  // Sample data matching the design more closely
  const weeklyData: WeeklyData[] = [
    { day: "Mon", income: 50 },
    { day: "Tue", income: 16 },
    { day: "Wed", income: 56 },
    { day: "Thu", income: 36 },
    { day: "Fri", income: 58 },
    { day: "Sat", income: 24 },
    { day: "Sun", income: 78 },
  ];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Create gradient for the area under the line - with less spread
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(64, 185, 35, 0.1)"); // Less opacity at the top
        gradient.addColorStop(0.2, "rgba(64, 185, 35, 0.05)"); // Fade quickly
        gradient.addColorStop(0.5, "rgba(64, 185, 35, 0.01)"); // Almost transparent
        gradient.addColorStop(1, "rgba(64, 185, 35, 0)"); // Fully transparent

        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: weeklyData.map((data) => data.day),
            datasets: [
              {
                label: "Income",
                data: weeklyData.map((data) => data.income),
                borderColor: "#4DAF01",
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                borderWidth: 2.5,
                pointBackgroundColor: "#4DAF01",
                pointBorderColor: "#ffffff",
                pointBorderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#40B923",
                pointHoverBorderColor: "#ffffff",
                pointHoverBorderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // Hide legend as it's not in the design
              },
              tooltip: {
                mode: "index",
                intersect: false,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "#000",
                bodyColor: "#000",
                borderColor: "#e2e8f0",
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                  label: function (context) {
                    return `Income: ${context.parsed.y}`;
                  },
                },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 10,
                  color: "#667085",
                  font: {
                    size: 12,
                  },
                },
                border: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: "#F2F4F7",

                  lineWidth: 1,
                },
                border: {
                  display: false,
                },
                ticks: {
                  padding: 10,
                  color: "#667085",
                  stepSize: 20,
                  font: {
                    size: 12,
                  },
                },
              },
            },
            layout: {
              padding: {
                left: 5,
                right: 10,
                top: 10,
                bottom: 10,
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "index",
              intersect: false,
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`p-4 bg-white border rounded-xl border-gray-100 ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-medium text-dark">This Week's Income</h2>
      </div>
      <div className="aspect-[2] ">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default WeeklyIncome;
