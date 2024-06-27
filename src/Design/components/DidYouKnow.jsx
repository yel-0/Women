import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const DidYouKnow = ({ category, title }) => {
  return (
    <div>
      <Card className="mb-4 w-[100%]  rounded-none bg-transparent border-none">
        <CardContent className="p-0">
          <div className="flex flex-row justify-start">
            <div
              className="w-[100px] p-1 text-sm bg-[#91DDCF]"
              style={{
                boxShadow: "4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            >
              {category}
            </div>
          </div>
          <div
            className="bg-[#F6F5F5]  h-[400px] flex justify-center items-center border-[1px]"
            style={{
              boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
            }}
          >
            <div className="flex items-center">
              <div className="p-3 w-[600px]">
                <div className="text-4xl leading-relaxed  bg-[#91DDCF]">
                  {title}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DidYouKnow;
