// MonthlyIssuance.tsx
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface MonthlyIssuanceProps {
  className?: string;
}

interface MonthlyData {
  month: string;
  personalized: number;
  instant: number;
}

const MonthlyIssuance: React.FC<MonthlyIssuanceProps> = ({
  className = "",
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const monthlyData: MonthlyData[] = [
    { month: "May", personalized: 11, instant: 41 },
    { month: "Jun", personalized: 21, instant: 49 },
    { month: "Jul", personalized: 8, instant: 23 },
    { month: "Aug", personalized: 9, instant: 48 },
    { month: "Sep", personalized: 12, instant: 37 },
    { month: "Oct", personalized: 18, instant: 62 },
    { month: "Nov", personalized: 10, instant: 62 },
  ];

  const legendItems = [
    { label: "Personalized", color: "#014DAF" },
    { label: "Instant", color: "#CCE2FF" },
  ];

  const CustomLegend = () => (
    <div className="flex items-center justify-center px-4 gap-x-6">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center mb-1">
          <span
            className="inline-block w-2 h-2 mr-2 rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="text-xs text-[#808080]">{item.label}</span>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: monthlyData.map((data) => data.month),
            datasets: [
              {
                label: "Personalized",
                data: monthlyData.map((data) => data.personalized),
                backgroundColor: "#014DAF",
                borderColor: "#014DAF",
                borderWidth: 0,
                borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0,
                },
                barPercentage: 0.8,
                categoryPercentage: 0.9,
              },
              {
                label: "Instant",
                data: monthlyData.map((data) => data.instant),
                backgroundColor: "#CCE2FF",
                borderColor: "#CCE2FF",
                borderWidth: 0,
                borderRadius: {
                  topLeft: 6,
                  topRight: 6,
                  bottomLeft: 0,
                  bottomRight: 0,
                },
                barPercentage: 0.8,
                categoryPercentage: 0.9,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                mode: "index",
                intersect: false,
              },
              title: {
                display: false,
              },
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 10,
                  color: "#667085",
                },
              },
              y: {
                stacked: true,
                beginAtZero: true,
                max: 100,
                grid: {
                  color: "#F2F4F7",
                },
                border: {
                  display: false,
                },
                ticks: {
                  padding: 10,
                  color: "#667085",
                },
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={` bg-white border py-4 rounded-xl border-gray ${className}`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-medium text-dark">Monthly Issuance</h2>
        </div>
        <div className="h-fit aspect-[1.82]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>

      <hr className="text-gray w-full mt-4 mb-2.5 " />

      <CustomLegend />
    </div>
  );
};

export default MonthlyIssuance;
