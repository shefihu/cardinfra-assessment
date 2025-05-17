import { CardRequestsTable } from "./charts/CardRequestsTable";
import CardStatus from "./charts/CardStatus";
import MonthlyIssuance from "./charts/MonthlyIssuance";
import WeeklyIncome from "./charts/WeeklyIncome";
import Stats from "./Stats";

const Analytics = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-2.5">Analytics</h2>
      <Stats />
      <div className="flex flex-wrap w-full gap-2 mt-2">
        <div className="flex flex-col flex-1 gap-2 w-full">
          <MonthlyIssuance />
          <WeeklyIncome />
        </div>
        <div className="flex flex-col flex-1 gap-2 w-full">
          <CardRequestsTable />
          <CardStatus />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
