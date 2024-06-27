import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Importing UI components
import { Button } from "@/components/ui/button"; // Assuming this is your Button component
import DeleteUserDialog from "./DeleteUserDialog"; // Assuming you have a DeleteUserDialog component

const DataTable = ({ data, headers }) => {
  return (
    <div className=" w-full shadow-md overflow-hidden">
      <Table className="min-w-full divide-y divide-gray-300">
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="py-3 px-6 text-left">
                {header}
              </TableHead>
            ))}
            <TableHead className="py-3 px-6 text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                <TableCell key={key} className="py-4 px-6">
                  {row[key]}
                </TableCell>
              ))}
              <TableCell className="py-4 px-6">
                <DeleteUserDialog user={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
