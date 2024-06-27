import React from "react";
import DataTable from "@/Design/components/DataTable";
import { Calendar } from "@/Design/components/Calendar";
import { Button } from "@/components/ui/button";
const Users = () => {
  const headers = ["ID", "Name", "Email", "Joined"];
  const dummyUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      joined: "2024-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      joined: "2024-06-05",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      joined: "2024-06-10",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      joined: "2024-06-15",
    },
    {
      id: 5,
      name: "James Wilson",
      email: "james.wilson@example.com",
      joined: "2024-06-20",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      joined: "2024-06-22",
    },
    {
      id: 7,
      name: "Daniel Miller",
      email: "daniel.miller@example.com",
      joined: "2024-06-25",
    },
    {
      id: 8,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      joined: "2024-06-27",
    },
    {
      id: 9,
      name: "William Garcia",
      email: "william.garcia@example.com",
      joined: "2024-06-30",
    },
    {
      id: 10,
      name: "Isabella Rodriguez",
      email: "isabella.rodriguez@example.com",
      joined: "2024-07-01",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <div className="flex items-center gap-5">
          <Calendar />
          <Button>Download</Button>
        </div>
      </div>
      <DataTable data={dummyUsers} headers={headers} />
    </div>
  );
};

export default Users;
