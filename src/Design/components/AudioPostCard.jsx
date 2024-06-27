import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Play } from "lucide-react";
const AudioPostCard = () => {
  const bgColors = ["#CDE8E5", "#C1F2B0", "#BA90C6"];

  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  return (
    <Card className="mb-4 w-[320px]  rounded-none bg-transparent border-none">
      <CardContent className="p-0">
        <div className="flex flex-row justify-start">
          <div
            className="w-[100px] text-center p-1 text-sm"
            style={{
              backgroundColor: randomColor,
              boxShadow: "4px 0px 0px rgba(0, 0, 0, 1)",
            }}
          >
            good
          </div>
        </div>
        <div
          className="bg-[#F6F5F5] min-h-[200px] flex flex-col justify-start items-start border-[1px]"
          style={{
            boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div className="p-3 min-h-[200px] flex flex-row justify-center items-center w-full">
            <h2 className="text-2xl text-start">
              "My relationships with my partner's partners are some of my
              greatest teaching moments"
            </h2>
          </div>
          <CardFooter className="border-t   p-1 flex flex-row justify-between w-full ">
            <div className=" w-[85%] h-full border-r text-[10px]">
              <div>Jessamyn stanley</div>
              <div>On Polyamory</div>
              <div>36, Black , El Sobrante , Ca</div>
            </div>
            <div className="flex cursor-pointer  w-[15%] h-full flex-row justify-center items-center">
              <Play />
            </div>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioPostCard;
