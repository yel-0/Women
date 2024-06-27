import React from "react";
import { Calendar } from "@/Design/components/Calendar";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/Design/components/CategoryCard";
import CreateCategoryDialog from "@/Design/components/CreateCategoryDialog";
import QuotesCard from "@/Design/components/QuotesCard";
import CreateQuoteDialog from "@/Design/components/CreateQuoteDialog";

const Quotes = () => {
  const quotes = [
    {
      quoteText:
        "Love is not about how much you say 'I love you', but how much you can prove that it's true.",
      category: "Love",
    },
    {
      quoteText:
        "Take care of your body. It's the only place you have to live.",
      category: "Body",
    },
    {
      quoteText: "Family is not an important thing. It's everything.",
      category: "Family",
    },
    {
      quoteText:
        "Love is not about how much you say 'I love you', but how much you can prove that it's true.",
      category: "Love",
    },
    {
      quoteText:
        "Take care of your body. It's the only place you have to live.",
      category: "Body",
    },
    {
      quoteText: "Family is not an important thing. It's everything.",
      category: "Family",
    },
    {
      quoteText:
        "Love is not about how much you say 'I love you', but how much you can prove that it's true.",
      category: "Love",
    },
    {
      quoteText:
        "Take care of your body. It's the only place you have to live.",
      category: "Body",
    },
    {
      quoteText: "Family is not an important thing. It's everything.",
      category: "Family",
    },
  ];
  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Quotes</h1>
        <div className="flex items-center gap-5">
          <Calendar />
          <Button>Download</Button>
        </div>
      </div>
      <div className="p-5 flex justify-center">
        <CreateQuoteDialog />
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {quotes.map((quote, index) => (
          <QuotesCard
            key={index}
            quoteText={quote.quoteText}
            category={quote.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
