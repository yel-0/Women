import React from "react";
import PostCard from "@/Design/components/PostCard";
import { Circle } from "lucide-react";
import DidYouKnow from "@/Design/components/DidYouKnow";

const Home = () => {
  return (
    <div className="bg-[#efeee7] p-4 space-y-6">
      <DidYouKnow
        category="သင်သိပါလား ?"
        title="မိခင်နို့တိုက်ကျွေးခြင်းသည် သားအိမ်အား ၎င်း၏ ကိုယ်ဝန်မဆောင်မီ အရွယ်အစားသို့ ပြန်လည်ရောက်ရှိစေရန် ကူညီပေးသည်။"
      />
      {/* Section 1 */}
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <Circle className="text-gray-500  " size="16" />
          <h2 className="text-sm font-bold text-gray-700">Programming</h2>
        </div>
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

      {/* Section 2 */}
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <Circle className="text-gray-500 " size="16" />
          <h2 className="text-sm font-bold text-gray-700">Hobbies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* Replace with your actual PostCard components */}
          <PostCard
            title="What are some tips for Gardening?"
            category="Hobbies"
          />
          <PostCard
            title="What are some tips for Cooking?"
            category="Hobbies"
          />
          <PostCard
            title="What are some tips for Painting?"
            category="Hobbies"
          />
          <PostCard
            title="What are some tips for Photography?"
            category="Hobbies"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <div className="flex items-center space-x-2">
          <Circle className="text-gray-500 " size="16" />
          <h2 className="text-sm font-bold text-gray-700">Travel</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* Replace with your actual PostCard components */}
          <PostCard title="Top Travel Destinations in 2024" category="Travel" />
          <PostCard
            title="Travel Tips for First-Time Travelers"
            category="Travel"
          />
          <PostCard title="How to Plan Your Next Vacation?" category="Travel" />
          <PostCard
            title="What to Pack for a Tropical Vacation?"
            category="Travel"
          />
        </div>
      </div>
      <DidYouKnow
        category="Quote"
        title="သန်မာသောမိန်းမသည် သူ့ကိုယ်သူအတွက် ရပ်တည်၏။ ပိုပြီးသန်မာသောမိန်းမသည် သူတစ်ပါးအတွက် ရပ်တည်၏။"
      />
    </div>
  );
};

export default Home;
