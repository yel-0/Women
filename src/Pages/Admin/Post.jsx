import React from "react";
import { Calendar } from "@/Design/components/Calendar";
import { Button } from "@/components/ui/button";
import PostCardForAdmin from "@/Design/components/PostCardForAdmin";
import CreatePostDialog from "@/Design/components/CreatePostDialog";

const Post = () => {
  const posts = [
    {
      id: 1,
      title: "The Dawn of New Beginnings",
      context:
        "This is the context of the first post. In this article, we explore the essence of starting anew, capturing the excitement and challenges that come with embarking on a new journey. Whether it's a personal endeavor, a career shift, or a fresh start in a different city, new beginnings offer a unique blend of anticipation and uncertainty. We delve into how to harness this energy positively, setting goals that are both ambitious and achievable, and how to remain resilient when faced with the inevitable hurdles that come our way.",
      category: "General",
    },
    {
      id: 2,
      title: "Tech Innovations of 2024",
      context:
        "This is the context of the second post. The year 2024 has been marked by groundbreaking technological advancements. From the latest in artificial intelligence, with machine learning models becoming more integrated into everyday applications, to quantum computing making strides in solving complex problems that were previously insurmountable. We also take a look at the innovations in renewable energy that promise to transform our approach to sustainability. This article provides an in-depth analysis of the most impactful tech trends that are shaping the future.",
      category: "Technology",
    },
    {
      id: 3,
      title: "Healthy Living: A Comprehensive Guide",
      context:
        "This is the context of the third post. Maintaining a healthy lifestyle is more than just a trend; it’s a lifelong commitment to wellbeing. This guide covers everything from balanced nutrition and regular physical activity to mental health and wellness practices. We discuss the benefits of incorporating whole foods into your diet, the importance of staying active, and how mindfulness can improve your overall quality of life. Practical tips and expert advice are provided to help you make informed choices that promote long-term health and vitality.",
      category: "Health",
    },
    {
      id: 4,
      title: "Economic Trends: What to Expect in 2025",
      context:
        "This is the context of the fourth post. As we look towards 2025, various economic indicators suggest a complex landscape for the global economy. This article examines key trends such as inflation rates, employment patterns, and the impact of geopolitical events on trade and investment. We also explore how emerging markets are positioning themselves for growth and the potential challenges they may face. This comprehensive analysis provides insights into what businesses and individuals can expect in the coming year.",
      category: "Economy",
    },
    {
      id: 5,
      title: "The Evolution of Modern Education",
      context:
        "This is the context of the fifth post. Education is evolving rapidly with the integration of technology and innovative teaching methods. In this article, we explore the shift towards personalized learning, the use of virtual reality in classrooms, and the rise of online education platforms. We also discuss the importance of developing critical thinking and problem-solving skills in students to prepare them for the future workforce. Insights from educators and industry experts highlight the transformative changes shaping the future of education.",
      category: "Education",
    },
    {
      id: 6,
      title: "Travel Destinations: Exploring the Unseen",
      context:
        "This is the context of the sixth post. Traveling offers a chance to discover new cultures, landscapes, and experiences. This article highlights some of the most breathtaking and lesser-known travel destinations around the world. From hidden gems in Southeast Asia to off-the-beaten-path adventures in South America, we explore destinations that promise unique and unforgettable experiences. Tips on how to travel sustainably and respect local cultures are also included, ensuring that your adventures leave a positive impact on the places you visit.",
      category: "Travel",
    },
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <div className="flex items-center gap-5">
          <Calendar />
          <Button>Download</Button>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center p-5">
        <CreatePostDialog />
      </div>{" "}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCardForAdmin
            key={post.id}
            title={post.title}
            context={post.context}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
