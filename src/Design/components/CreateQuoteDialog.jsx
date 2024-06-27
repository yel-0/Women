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
import { Plus } from "lucide-react";

const CreateQuoteDialog = () => {
  const [quoteText, setQuoteText] = useState("");
  const [category, setCategory] = useState("");

  const handleCreate = () => {
    // Validate input
    if (!quoteText.trim() || !category.trim()) {
      alert("Please enter both quote text and category.");
      return;
    }

    // Implement create functionality
    const newQuote = {
      quoteText,
      category,
    };

    setQuoteText("");
    setCategory("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Quote</DialogTitle>
          <DialogDescription>Enter the quote and category</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <label
            htmlFor="quoteText"
            className="block font-medium text-gray-700"
          >
            Quote Text
          </label>
          <input
            type="text"
            id="quoteText"
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleCreate}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuoteDialog;
