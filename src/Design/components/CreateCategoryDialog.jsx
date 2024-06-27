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
import { Plus } from "lucide-react";

const CreateCategoryDialog = () => {
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCreate = () => {
    console.log(`Creating category: ${newCategoryName}`);
    // Implement the create logic here
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>
          <DialogDescription>
            Enter the name of the new category you want to create.
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Category Name"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        />
        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleCreate} className=" text-white">
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
