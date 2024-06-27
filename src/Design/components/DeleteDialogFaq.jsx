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

const DeleteDialogFaq = () => {
  return (
    <Dialog>
      <DialogTrigger>Delete </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete FAQ</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this FAQ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-6">
          <Button className="text-white bg-red-500">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialogFaq;
