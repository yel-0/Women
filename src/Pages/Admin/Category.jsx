import React from "react";
import { Calendar } from "@/Design/components/Calendar";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/Design/components/CategoryCard";
import CreateCategoryDialog from "@/Design/components/CreateCategoryDialog";

const Category = () => {
  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Category</h1>
        <div className="flex items-center gap-5">
          <Calendar />
          <Button>Download</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex justify-center">
          <CreateCategoryDialog />
        </div>
        <div className="flex justify-center">
          <CategoryCard title={"Love"} />
        </div>
        <div className="flex justify-center">
          <CategoryCard title={"Body"} />
        </div>
        <div className="flex justify-center">
          <CategoryCard title={"Family"} />
        </div>
      </div>
    </div>
  );
};

export default Category;
