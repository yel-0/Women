import React from "react";
import { Quote } from "lucide-react"; // Importing the quote icon
import { Button } from "@/components/ui/button"; // Assuming this is your button component
import UpdateQuoteDialog from "./UpdateQuoteDialog";
import DeleteQuoteDialog from "./DeleteQuoteDialog";

const QuotesCard = ({ quoteText, category }) => {
  return (
    <div className="border w-[300px] h-[200px] bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-900 mb-2">
              "{quoteText}"
            </p>
            <span className="text-xs text-gray-500">- {category}</span>
          </div>
          <Quote size={24} className="text-gray-700 ml-2" />
        </div>
        <div className="flex justify-around w-full mt-2">
          <UpdateQuoteDialog quoteText={quoteText} category={category} />
          <DeleteQuoteDialog quoteText={quoteText} />
        </div>
      </div>
    </div>
  );
};

export default QuotesCard;
