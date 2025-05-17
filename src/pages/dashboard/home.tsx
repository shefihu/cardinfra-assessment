import { useState, useEffect } from "react";
import Header from "../../common/dashboard/Header";
import QuickAccess from "../../components/home/QuickAccess";
import Analytics from "../../components/home/Analytics";

const Home: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const formatDateTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    setCurrentDateTime(formatDateTime());

    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-3">
      <Header
        title="Hi Nazeer, what would you like to do today?"
        subtext={`Last login: ${currentDateTime}`}
      />

      <QuickAccess />
      <Analytics />
    </div>
  );
};

export default Home;
