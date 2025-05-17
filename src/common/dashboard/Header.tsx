import { CalenderIcon } from "../../assets/svg/svg";

interface HeaderProps {
  title: string;
  subtext?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtext }) => {
  const getDate = () => {
    const date = new Date();

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between">
      <div className="flex flex-col text-dark">
        <h4 className="text-lg font-bold ">{title}</h4>
        {subtext && <p className="text-xs ">{subtext}</p>}
      </div>

      <div className="border px-3 h-8 py-2 flex gap-2 items-center text-xs text-dark border-[#D0D5DD] rounded">
        <div className="flex gap-1 items-center">
          <CalenderIcon />
          <p>Today</p>
        </div>
        <div className="h-full border-r-[0.6px] border-[#D0D5DD] " />
        <p>{getDate()}</p>
      </div>
    </div>
  );
};

export default Header;
