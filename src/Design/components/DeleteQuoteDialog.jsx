import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming these are your dialog components
import { Button } from "@/components/ui/button"; // Assuming this is your button component

const DeleteQuoteDialog = ({ quoteText }) => {
  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <Dialog>
      <DialogTrigger>Delete</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this quote?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-center">
          <p className="text-lg font-medium text-gray-900">"{quoteText}"</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteQuoteDialog;
