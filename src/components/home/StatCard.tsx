// StatCard.tsx
import React, { type ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  // iconColor: string;
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  additionalInfo?: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,

  title,
  value,
  change,
  additionalInfo,
}) => {
  return (
    <div className="p-3 pb-4 bg-white border border-gray rounded-xl">
      <div className="mb-3 space-y-1 ">
        {icon}
        <span className="text-sm text-[#0000008F] font-medium">{title}</span>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold">
          {typeof value === "number" ? value.toLocaleString() : value}
        </div>
        {change && (
          <div className="flex items-center gap-1 text-sm">
            <div className="flex px-1.5 py-0.5 rounded items-center gap-2 bg-[#EFFAF6]">
              <span
                className={`flex text-xs items-center ${
                  change.isPositive ? "text-[#29A174]" : "text-red-500"
                }`}
              >
                {change.isPositive ? (
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L9 3M9 3H5M9 3V7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {change.value}%
              </span>
            </div>
            <span className="text-[#0000008F] text-sm">{change.period}</span>
          </div>
        )}
        {additionalInfo && <div className="ml-2">{additionalInfo}</div>}
      </div>
    </div>
  );
};

export default StatCard;
