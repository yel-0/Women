import React from "react";
import { ArrowBigUpDash } from "lucide-react"; // Assuming ArrowBigUpDash is your icon component
import { Button } from "@/components/ui/button"; // Assuming this is your button component
import UpdateCategoryDialog from "./UpdateCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

const CategoryCard = ({ title }) => {
  return (
    <div className="border w-[250px] bg-white rounded-lg p-6 shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <ArrowBigUpDash size={28} className="text-gray-700" />
        </div>
        <div className="flex justify-between space-x-4">
          <UpdateCategoryDialog category={title} />
          <DeleteCategoryDialog category={title} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
