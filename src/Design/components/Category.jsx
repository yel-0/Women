import React from "react";
import { Link } from "react-router-dom";
import { Circle } from "lucide-react";

const categories = [
  { name: "Abortion", path: "/category/abortion" },
  { name: "Breasts", path: "/category/breasts" },
  { name: "Birth Control", path: "/category/birth-control" },
  { name: "Endometriosis", path: "/category/endometriosis" },
];

const Category = () => {
  return (
    <div className="p-6">
      <h2 className="text-sm flex flex-row items-center gap-3 font-bold mb-4">
        <Circle size={16} />
        <div> Browse By Subject</div>{" "}
      </h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={category.path} className="block text-lg ">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
