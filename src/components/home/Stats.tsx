// Stats.tsx
import React, { type ReactNode } from "react";
import StatCard from "./StatCard";

interface StatCardData {
  id: string;
  icon: ReactNode;

  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  additionalInfo?: ReactNode;
}

const Stats: React.FC = () => {
  const ActiveCardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        stroke="#00984C"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.167 12 1.333 1.334 2.667-2.667m0-4H1.833M15.167 8V5.467c0-.747 0-1.12-.146-1.405a1.33 1.33 0 0 0-.582-.583c-.286-.146-.659-.146-1.406-.146H3.967c-.747 0-1.12 0-1.406.146-.25.128-.454.332-.582.583-.146.285-.146.658-.146 1.405v5.067c0 .746 0 1.12.146 1.405.128.25.332.455.582.582.286.146.659.146 1.406.146H8.5"
      ></path>
    </svg>
  );
  const PersonalizedCardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#8020E7"
        d="M1.333 6.667h13.334v-1.2c0-.747 0-1.12-.146-1.405a1.33 1.33 0 0 0-.582-.583c-.286-.146-.659-.146-1.406-.146H3.467c-.747 0-1.12 0-1.406.146-.25.128-.455.332-.582.583-.146.285-.146.658-.146 1.405v5.067c0 .746 0 1.12.146 1.405.127.25.331.455.582.582.285.146.659.146 1.406.146h3.866M9.667 14l1.35-.27c.117-.023.176-.035.231-.057a.7.7 0 0 0 .138-.073c.048-.034.09-.077.176-.162l2.771-2.771A.943.943 0 0 0 13 9.334l-2.772 2.771a1.4 1.4 0 0 0-.16.176.7.7 0 0 0-.075.138 1.4 1.4 0 0 0-.056.231z"
      ></path>
    </svg>
  );

  const RevenueIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#2087E7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7.333V10m8-4v2.666m-.667-6c1.633 0 2.516.25 2.955.444.059.026.088.039.172.12.05.048.143.19.167.255.04.11.04.17.04.29v7.166c0 .605 0 .908-.091 1.064a.58.58 0 0 1-.355.293c-.17.06-.513-.006-1.2-.138a9 9 0 0 0-1.688-.16c-2 0-4 1.333-6.666 1.333-1.633 0-2.516-.25-2.955-.444a.5.5 0 0 1-.172-.119 1 1 0 0 1-.167-.256c-.04-.11-.04-.17-.04-.29V5.06c0-.606 0-.909.091-1.064a.58.58 0 0 1 .355-.293c.17-.06.513.006 1.2.138.48.092 1.05.16 1.688.16 2 0 4-1.333 6.666-1.333M9.667 8a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0"
      ></path>
    </svg>
  );

  const AlertIcon = () => (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.49992 12.3335H10.4999M4.89992 1.3335H12.0999C12.4733 1.3335 12.66 1.3335 12.8026 1.40616C12.928 1.47007 13.03 1.57206 13.0939 1.6975C13.1666 1.84011 13.1666 2.02679 13.1666 2.40016V3.78317C13.1666 4.10929 13.1666 4.27236 13.1297 4.42581C13.0971 4.56185 13.0432 4.69191 12.9701 4.81121C12.8876 4.94576 12.7723 5.06107 12.5417 5.29167L10.5875 7.24592C10.3235 7.50993 10.1915 7.64193 10.142 7.79415C10.0985 7.92805 10.0985 8.07228 10.142 8.20617C10.1915 8.35839 10.3235 8.4904 10.5875 8.75441L12.5417 10.7087C12.7723 10.9393 12.8876 11.0546 12.9701 11.1891C13.0432 11.3084 13.0971 11.4385 13.1297 11.5745C13.1666 11.728 13.1666 11.891 13.1666 12.2172V13.6002C13.1666 13.9735 13.1666 14.1602 13.0939 14.3028C13.03 14.4283 12.928 14.5303 12.8026 14.5942C12.66 14.6668 12.4733 14.6668 12.0999 14.6668H4.89992C4.52655 14.6668 4.33987 14.6668 4.19726 14.5942C4.07182 14.5303 3.96983 14.4283 3.90591 14.3028C3.83325 14.1602 3.83325 13.9735 3.83325 13.6002V12.2172C3.83325 11.891 3.83325 11.728 3.87009 11.5745C3.90275 11.4385 3.95663 11.3084 4.02973 11.1891C4.11219 11.0546 4.22749 10.9393 4.45809 10.7087L6.41234 8.75441C6.67635 8.4904 6.80836 8.35839 6.85781 8.20617C6.90132 8.07228 6.90132 7.92805 6.85781 7.79415C6.80836 7.64193 6.67635 7.50992 6.41234 7.24592L4.45809 5.29167C4.22749 5.06107 4.11219 4.94576 4.02973 4.81121C3.95663 4.69191 3.90275 4.56185 3.87009 4.42581C3.83325 4.27236 3.83325 4.10929 3.83325 3.78317V2.40016C3.83325 2.02679 3.83325 1.84011 3.90591 1.6975C3.96983 1.57206 4.07182 1.47007 4.19726 1.40616C4.33987 1.3335 4.52655 1.3335 4.89992 1.3335Z"
        stroke="#E78020"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <g clipPath="url(#clip0_112_6266)">
        <path
          stroke="#E78020"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4v2m0 2h.005M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_6266">
          <path fill="#fff" d="M0 0h12v12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );

  const RequiresAttention = () => (
    <div className="flex items-center gap-1 ">
      <InfoIcon />

      <p className="text-xs  text-[#E78020]">Requires attention</p>
    </div>
  );

  const statCardsData: StatCardData[] = [
    {
      id: "active-cards",
      icon: <ActiveCardIcon />,

      title: "Total Active Cards",
      value: 26478,
      change: {
        value: 9,
        isPositive: true,
        period: "this month",
      },
    },
    {
      id: "personalized-cards",
      icon: <PersonalizedCardIcon />,

      title: "Total Personalized Cards",
      value: 15703,
      change: {
        value: 8.5,
        isPositive: true,
        period: "this month",
      },
    },
    {
      id: "revenue",
      icon: <RevenueIcon />,

      title: "Today's Revenue",
      value: "₦9.3M",
      change: {
        value: 6,
        isPositive: true,
        period: "vs yesterday",
      },
    },
    {
      id: "pending-requests",
      icon: <AlertIcon />,

      title: "Pending Requests",
      value: 38,
      additionalInfo: <RequiresAttention />,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {statCardsData.map((card) => (
          <StatCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            value={card.value}
            change={card.change}
            additionalInfo={card.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
