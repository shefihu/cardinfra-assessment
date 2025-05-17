import { useState } from "react";
import { MaximizeIcon } from "../../../assets/svg/svg";

// Define the allowed status types
type Status = "Ready" | "In Progress" | "Acknowledged" | "Pending";

// Define styles for each status
const statusStyle: Record<Status, string> = {
  Ready: "bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]",
  "In Progress": "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
  Acknowledged: "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]",
  Pending: "text-[#344054] bg-[#F9FAFB] border-[#EAECF0]",
};

// Define request data structure
type Request = {
  branch: string;
  cardType: string;
  quantity: string;
  status: Status;
};

// Dummy request data
const requests: Request[] = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "Ready",
  },
  {
    branch: "Personalized",
    cardType: "Instant",
    quantity: "10",
    status: "In Progress",
  },
  {
    branch: "Personalized",
    cardType: "Instant",
    quantity: "10",
    status: "Acknowledged",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "Pending",
  },
];

// Custom minimize icon component
const MinimizeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9H3V7H7V3H9V9ZM9 21H7V17H3V15H9V21ZM21 15H15V21H13V15H13.01V9H15V15H21V15ZM21 7H17V3H15V9H21V7Z"
      fill="currentColor"
    />
  </svg>
);

export const CardRequestsTable = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <>
      {/* Overlay for fullscreen mode */}
      {isMaximized && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black/50 z-100"
          onClick={toggleMaximize}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-[90%] h-fit z-50 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <MaximizedContent toggleMaximize={toggleMaximize} />
          </div>
        </div>
      )}

      {/* Normal table view */}
      <div
        className={`px-4 pt-4 pb-8 space-y-5 bg-white border lg:aspect-video border-gray rounded-xl w-full ${
          isMaximized ? "hidden" : "block"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium leading-4.5 text-dark">
            Recent Card Requests
          </p>
          <button
            onClick={toggleMaximize}
            className="text-[#D0D5DD] hover:text-[#94a7b9] transition duration-150 p-1"
            aria-label="Maximize table view"
          >
            <MaximizeIcon />
          </button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="[&>td]:text-sm [&>td]:font-medium [&>td]:leading-4.5 [&>td]:text-[rgba(0,0,0,0.56)]  [&>td]:px-2 [&>td]:whitespace-nowrap [&>td]:py-2 bg-[#F1F7FF] border border-[#E2E2E2] [&>td]:text-center">
                <td>Branch</td>
                <td>Card Type</td>
                <td>Quantity</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(2)]:border-y [&>tr:nth-child(3)]:border-y [&>tr]:border-[#EAECF0]">
              {requests.map((req, index) => (
                <tr
                  key={index}
                  className="[&>td]:py-2.5 [&>td]:text-xs [&>td]:text-center [&>td]:border-collapse"
                >
                  <td className="text-[#475467] ">{req.branch}</td>
                  <td className="text-[#475467]">{req.cardType}</td>
                  <td className="text-[#475467]">{req.quantity}</td>
                  <td className="flex items-center justify-center">
                    <div
                      className={`py-0.5 px-2 border w-fit rounded-2xl self-center ${
                        statusStyle[req.status]
                      }`}
                    >
                      {req.status}
                    </div>
                  </td>
                  <td className="text-xs font-bold leading-5">
                    <button className="cursor-pointer text-[#014DAF]">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// Component for maximized view
const MaximizedContent = ({
  toggleMaximize,
}: {
  toggleMaximize: () => void;
}) => {
  return (
    <>
      {/* Header with minimize button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <p className="text-xl font-medium text-dark">Recent Card Requests</p>
        <button
          onClick={toggleMaximize}
          className="text-[#D0D5DD] hover:text-[#94a7b9] transition duration-150 p-1"
          aria-label="Minimize table view"
        >
          <MinimizeIcon />
        </button>
      </div>

      {/* Expanded table */}
      <div className="flex-grow p-4 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="[&>td]:text-sm [&>td]:font-medium [&>td]:leading-4.5 [&>td]:text-[rgba(0,0,0,0.56)]  [&>td]:px-4 [&>td]:py-3 bg-[#F1F7FF] border border-[#E2E2E2] [&>td]:text-center">
              <td>Branch</td>
              <td>Card Type</td>
              <td>Quantity</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(odd)]:bg-[#f9fafb] [&>tr]:border-b [&>tr]:border-[#EAECF0]">
            {requests.map((req, index) => (
              <tr
                key={index}
                className="[&>td]:py-3 [&>td]:text-sm [&>td]:text-center"
              >
                <td className="text-[#475467] ">{req.branch}</td>
                <td className="text-[#475467]">{req.cardType}</td>
                <td className="text-[#475467]">{req.quantity}</td>
                <td>
                  <div className="flex justify-center">
                    <div
                      className={`py-1 px-3 border w-fit rounded-2xl ${
                        statusStyle[req.status]
                      }`}
                    >
                      {req.status}
                    </div>
                  </div>
                </td>
                <td className="text-sm font-medium">
                  <button className="cursor-pointer text-[#014DAF] hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
