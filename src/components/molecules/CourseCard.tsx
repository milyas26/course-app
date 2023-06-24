"use client";

import { Avatar, Card } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";

const CourseCard = ({ video }: any) => {
  const router = useRouter();
  return (
    <Card className="w-full p-0" onClick={() => router.push(`${video.slug}`)}>
      <img src={video.thumbnail} alt="web" className="rounded" />
      <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>{video.title}</p>
      </h5>
      <Avatar img={video.avatar} rounded className="justify-start">
        <div className="space-y-1 font-medium dark:text-white">
          <div>{video.youtuber}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Youtuber
          </div>
        </div>
      </Avatar>
    </Card>
  );
};

export default CourseCard;
