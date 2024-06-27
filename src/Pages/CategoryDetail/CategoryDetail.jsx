import React from "react";
import { useParams } from "react-router-dom";
import { Circle } from "lucide-react";
import PostCard from "@/Design/components/PostCard";
import Category from "@/Design/components/Category";
import AudioPostCard from "@/Design/components/AudioPostCard";
const CategoryDetail = () => {
  const { name } = useParams();
  return (
    <div className="p-6">
      <div className="mb-8">
        {/* <div className="flex items-center space-x-2">
          <Circle className="text-gray-500  " size="16" />
          <h2 className="text-sm font-bold text-gray-700">Programming</h2>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* Replace with your actual PostCard components */}
          <PostCard
            title="What are some tips for React?"
            category="Programming"
          />
          <PostCard
            title="What are some tips for React?"
            category="Programming"
          />
          <PostCard
            title="What are some tips for React?"
            category="Programming"
          />
          <PostCard
            title="What are some tips for React?"
            category="Programming"
          />
        </div>
      </div>
      <div className="mb-8">
        {/* <div className="flex items-center space-x-2">
          <Circle className="text-gray-500  " size="16" />
          <h2 className="text-sm font-bold text-gray-700">Programming</h2>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* Replace with your actual PostCard components */}
          <AudioPostCard />
          <AudioPostCard />
          <AudioPostCard />
          <AudioPostCard />
        </div>
      </div>
      <Category />
    </div>
  );
};

export default CategoryDetail;
