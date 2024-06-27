import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const PostCard = ({ title, category }) => {
  const bgColors = ["#CDE8E5", "#C1F2B0", "#BA90C6"];

  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <Card className="mb-4 w-[320px]  rounded-none bg-transparent border-none">
      <CardContent className="p-0">
        <div className="flex flex-row justify-start">
          <div
            className="w-[100px] p-1 text-sm text-center"
            style={{
              backgroundColor: randomColor,
              boxShadow: "4px 0px 0px rgba(0, 0, 0, 1)",
            }}
          >
            {category}
          </div>
        </div>
        <div
          className="bg-[#F6F5F5] h-[200px] flex justify-center items-center border-[1px]"
          style={{
            boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div className="flex items-center">
            <div className="p-3 w-[210px]">
              <h2 className="text-lg">{title}</h2>
            </div>
            <div
              className="flex-shrink-0 p-2 flex flex-row w-[70px] justify-center"
              style={{ backgroundColor: randomColor }}
            >
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
