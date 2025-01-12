import React from "react";
import { Card, CardContent } from "../components/ui/card"; 

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardContent className="text-xl font-bold mt-4 text-center">
        {post.title}
      </CardContent>
      <CardContent className="text-center mt-2">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 ${
            isDarkBackground ? "bg-black hover:bg-red-500" : ""
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}