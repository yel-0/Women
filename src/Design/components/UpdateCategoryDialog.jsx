import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const UpdateCategoryDialog = ({ category }) => {
  const [categoryName, setCategoryName] = useState(category);

  const handleUpdate = () => {
    console.log(`Updating category to: ${categoryName}`);
    // Implement the update logic here
  };

  return (
    <Dialog>
      <DialogTrigger>Update</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Category</DialogTitle>
          <DialogDescription>
            Modify the category name and save changes.
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        />
        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleUpdate} className=" text-white">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryDialog;
