import React from "react";

const DashboardCard = ({ title, description, content, icon: Icon }) => {
  return (
    <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Icon size={24} className="text-black" />
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-black">{content}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
