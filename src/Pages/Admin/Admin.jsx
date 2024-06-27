import React from "react";
import DashboardCard from "@/Design/components/DashboardCard";
import { LayoutDashboard, CassetteTape, PodcastIcon, User } from "lucide-react"; // Import icons from Lucide
import { Calendar } from "@/Design/components/Calendar";
import { Button } from "@/components/ui/button";
import LastUsersTable from "@/Design/components/LastUsersTable";

const Admin = () => {
  return (
    <div className=" w-full min-h-screen p-6">
      <div className="flex flex-row justify-between mb-6 items-center w-full">
        <h1 className="text-xl font-semibold ">Admin Dashboard</h1>
        <div className="flex flex-row justify-center gap-5 items-center">
          <Calendar />
          <Button>Download</Button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Subscriptions"
          description="Active Subscriptions"
          content="123"
          icon={LayoutDashboard}
        />
        <DashboardCard
          title="Total Users"
          description="Registered Users"
          content="456"
          icon={User}
        />
        <DashboardCard
          title="Total Posts"
          description="All Blog Posts"
          content="789"
          icon={CassetteTape}
        />
        <DashboardCard
          title="Total Audio Posts"
          description="Podcast and Audio"
          content="321"
          icon={PodcastIcon}
        />
      </div>
      <LastUsersTable />
    </div>
  );
};

export default Admin;
