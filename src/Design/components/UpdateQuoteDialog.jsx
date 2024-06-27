import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming these are your dialog components
import { Button } from "@/components/ui/button"; // Assuming this is your button component

const UpdateQuoteDialog = ({ quoteText, category }) => {
  const [updatedQuoteText, setUpdatedQuoteText] = useState(quoteText);
  const [updatedCategory, setUpdatedCategory] = useState(category);

  const handleUpdate = () => {
    // Implement update functionality
    const updatedQuote = {
      quoteText: updatedQuoteText,
      category: updatedCategory,
    };
  };

  return (
    <Dialog>
      <DialogTrigger>Update</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Quote</DialogTitle>
          <DialogDescription>Edit the quote and category</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <label
            htmlFor="updatedQuoteText"
            className="block font-medium text-gray-700"
          >
            Quote Text
          </label>
          <input
            type="text"
            id="updatedQuoteText"
            value={updatedQuoteText}
            onChange={(e) => setUpdatedQuoteText(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="updatedCategory"
            className="block font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="updatedCategory"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateQuoteDialog;
