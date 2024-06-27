import React, { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react"; // Renamed import for clarity
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Helper function to format the date (MM-DD-YYYY)
const formatDate = (date) => {
  if (!date) return "";
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}-${year}`;
};

export function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className="w-[200px] justify-start text-left font-normal bg-white text-black border border-gray-300 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 ease-in-out"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDate(date)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            initialFocus
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
