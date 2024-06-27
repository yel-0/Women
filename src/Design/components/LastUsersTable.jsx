import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Importing UI components

// Dummy data for demonstration
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

const LastUsersTable = () => {
  return (
    <div className="bg-white w-full shadow-md  overflow-hidden">
      <div className="py-5 ml-2">Last 10 Users </div>
      <Table className="min-w-full  divide-y divide-gray-300">
        {/* <TableCaption>Last 10 Users</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="py-3 px-6 text-left">ID</TableHead>
            <TableHead className="py-3 px-6 text-left">Name</TableHead>
            <TableHead className="py-3 px-6 text-left">Email</TableHead>
            <TableHead className="py-3 px-6 text-left">Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="py-4 px-6">{user.id}</TableCell>
              <TableCell className="py-4 px-6">{user.name}</TableCell>
              <TableCell className="py-4 px-6">{user.email}</TableCell>
              <TableCell className="py-4 px-6">{user.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LastUsersTable;
