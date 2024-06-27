import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteCategoryDialog = ({ category }) => {
  const handleDelete = () => {
    console.log(`Deleting category: ${category}`);
    // Implement the delete logic here
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-red-500 p-2 rounded-md text-white">
        Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the category "{category}"? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleDelete} className="bg-red-500 text-white">
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryDialog;
