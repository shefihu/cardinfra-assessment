// CardStatus.tsx
import React, { useEffect, useRef } from "react";
import { Chart, registerables, DoughnutController, ArcElement } from "chart.js";

Chart.register(...registerables, DoughnutController, ArcElement);

interface CardStatusProps {
  className?: string;
}

interface StatusData {
  label: string;
  value: number;
  color: string;
  percentageOfTotal: number;
}

const CardStatus: React.FC<CardStatusProps> = ({ className = "" }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  // Sample data for the card status distribution
  const statusData: StatusData[] = [
    { label: "Active", value: 1800, color: "#01A4AF", percentageOfTotal: 73.5 }, // Green
    { label: "Expired", value: 370, color: "#FFBA24", percentageOfTotal: 15.1 }, // Yellow
    { label: "Inactive", value: 150, color: "#014DAF", percentageOfTotal: 6.1 }, // Blue
    { label: "Blocked", value: 80, color: "#8020E7", percentageOfTotal: 3.3 }, // Purple
    { label: "Lost", value: 50, color: "#FF4457", percentageOfTotal: 2.0 }, // Red
  ];

  const totalCards = statusData.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: statusData.map((item) => item.label),
            datasets: [
              {
                data: statusData.map((item) => item.value),
                backgroundColor: statusData.map((item) => item.color),
                borderWidth: 0,
                borderRadius: 5,
                spacing: 4,

                borderColor: "transparent",
                hoverOffset: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "85%",
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "#000",
                bodyColor: "#000",
                borderColor: "#e2e8f0",
                borderWidth: 1,
                padding: 10,
                displayColors: true,
                callbacks: {
                  label: function (context) {
                    const value = context.raw as number;
                    const percentage = ((value / totalCards) * 100).toFixed(1);
                    return `${context.label}: ${value} (${percentage}%)`;
                  },
                },
              },
            },
            layout: {
              padding: 20,
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          },
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Custom legend with colored dots + labels
  const CustomLegend = () => (
    <div className="flex flex-wrap items-center justify-center mt-2 gap-x-6">
      {statusData.map((item, index) => (
        <div key={index} className="flex items-center mb-1">
          <span
            className="inline-block w-3 h-3 mr-2 rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="text-sm text-[#808080]">{item.label}</span>
        </div>
      ))}
    </div>
  );

  // Center text with total value
  const CenterText = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="mb-1 text-sm text-gray-500">Total Cards</p>
      <p className="text-2xl font-medium">{totalCards.toLocaleString()}</p>
    </div>
  );

  return (
    <div
      className={`p-4 bg-white border rounded-xl border-gray flex-1 ${className}`}
    >
      <h2 className="px-2 mb-4 text-lg font-medium text-dark">
        Card Status Distribution
      </h2>
      <div className="relative flex justify-center aspect-[1.6]  ">
        <div className="w-full max-w-lg">
          <canvas ref={chartRef}></canvas>
          <CenterText />
        </div>
      </div>
      <CustomLegend />
    </div>
  );
};

export default CardStatus;
