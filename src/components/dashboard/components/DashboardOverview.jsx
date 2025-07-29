import { FaUsers, FaFolderOpen, FaClock, FaMoneyBillWave, FaCheckCircle, FaUserPlus } from "react-icons/fa";

const cardData = [
  {
    title: "Total Users",
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    value: "1,254",
    bgColor: "bg-blue-100"
  },
  {
    title: "Total Cases",
    icon: <FaFolderOpen className="text-green-600 text-3xl" />,
    value: "548",
    bgColor: "bg-green-100"
  },
  {
    title: "Pending Approvals",
    icon: <FaClock className="text-yellow-600 text-3xl" />,
    value: "32",
    bgColor: "bg-yellow-100"
  },
  {
    title: "Earnings / Donations",
    icon: <FaMoneyBillWave className="text-purple-600 text-3xl" />,
    value: "₹2.5L",
    bgColor: "bg-purple-100"
  },
  {
    title: "Completed Tasks",
    icon: <FaCheckCircle className="text-teal-600 text-3xl" />,
    value: "1,032",
    bgColor: "bg-teal-100"
  },
  {
    title: "New Registrations",
    icon: <FaUserPlus className="text-pink-600 text-3xl" />,
    value: "64",
    bgColor: "bg-pink-100"
  }
];

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-5 rounded-2xl shadow-md flex items-center justify-between ${card.bgColor}`}
        >
          <div>
            <h3 className="text-gray-700 font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold mt-1">{card.value}</p>
          </div>
          <div>{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
