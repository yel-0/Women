import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming you have dialog components

const DeletePostDialog = ({ postId, postTitle }) => {
  const handleDelete = () => {};

  return (
    <Dialog>
      <DialogTrigger className=" border-2 border-red-500 rounded-lg p-2">
        Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the post "{postTitle}"? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirm Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
