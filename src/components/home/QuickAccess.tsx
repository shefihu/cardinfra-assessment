import {
  CardRequestsIcon,
  ChevronRightIcon,
  InstantCardIcon,
  ManageCardIcon,
  PersonalizedCardIcon,
} from "../../assets/svg/svg";

const QuickAccess = () => {
  return (
    <div className="w-full p-4 space-y-3 bg-white border text-dark border-gray rounded-xl">
      <h2 className="font-medium">Your Quick Access</h2>
      <div className="grid gap-2 text-sm font-medium sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#F1F7FF] rounded py-2 px-4 flex gap-x-4 items-center">
          <ManageCardIcon />
          <div className="flex items-center w-full gap-1 max-sm:justify-between">
            <p className="text-sm">Manage a Card</p>

            <ChevronRightIcon />
          </div>
        </div>
        <div className="bg-[#F1F7FF] rounded py-2 px-4 flex gap-x-4 items-center">
          <InstantCardIcon />
          <div className="flex items-center w-full gap-1 max-sm:justify-between">
            <p className="text-sm">Issue Instant Card</p>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="bg-[#F1F7FF] rounded py-2 px-4 flex gap-x-4 items-center">
          <PersonalizedCardIcon />
          <div className="flex items-center w-full gap-1 max-sm:justify-between">
            <p className="text-sm">Issue Personalized Card</p>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="bg-[#F1F7FF] rounded py-2 px-4 flex gap-x-4 items-center">
          <CardRequestsIcon />
          <div className="flex items-center w-full gap-1 max-sm:justify-between">
            <p className="text-sm">Review Card Requests</p>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
