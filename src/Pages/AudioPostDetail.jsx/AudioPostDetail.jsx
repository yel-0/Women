import React from "react";
import { useParams } from "react-router-dom";
import Category from "@/Design/components/Category";
import AudioPostCard from "@/Design/components/AudioPostCard";

const AudioPostDetail = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#efeee7] w-full space-y-6">
      <div className="min-h-screen flex flex-row justify-center items-center">
        <AudioPostCard />
      </div>

      <div className="max-w-4xl mx-auto ">
        <Category />
      </div>
    </div>
  );
};

export default AudioPostDetail;
