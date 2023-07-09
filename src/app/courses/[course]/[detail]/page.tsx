"use client";

import React from "react";
import videoData from "../../../../json/courses.json";
import { useParams } from "next/navigation";
import { Avatar, Card } from "flowbite-react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Detail = () => {
  const { course, detail } = useParams();
  const [activeVideo, setActiveVideo] = React.useState<any>(null);
  const coursesList: any = videoData.courses_list?.find(
    (item) => item.slug === `courses/${course}`
  );
  const courseData: any = coursesList.courses.find(
    (item: any) => item.slug === `/courses/${course}/${detail}`
  );
  const [hasWindow, setHasWindow] = React.useState(false);

  React.useEffect(() => {
    if (courseData) {
      setActiveVideo(courseData.videos[0]);
    }
  }, [courseData]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <main className="px-2 md:px-4">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-start">
        <Card className="col-span-3 md:p-4 order-1 md:order-none">
          <div className="tutor mb-4">
            <h1 className="font-semibold text-lg md:text-2xl mb-2 bg-blue-100 text-dark max-w-full py-1 px-2 rounded">
              {courseData.title}
            </h1>
            <Avatar img={courseData.avatar} rounded className="justify-start">
              <div className="space-y-1 font-medium dark:text-white">
                <div>{courseData.youtuber}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Youtuber
                </div>
              </div>
            </Avatar>
          </div>
          <div className="playlist overflow-y-auto max-h-[80vh]">
            <h2 className="font-medium text-base md:text-lg mb-4">Playlist</h2>
            {courseData.videos.map((video: any, index: any) => (
              <Card
                className={`mb-2 ${
                  activeVideo?.id === video.id && "bg-blue-100"
                }`}
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo(0, 0);
                }}
              >
                <h2 className="font-medium cursor-pointer text-base">{video.title}</h2>
              </Card>
            ))}
          </div>
        </Card>
        <div className="col-span-9 bg-white rounded aspect-square">
          {hasWindow && (
            <ReactPlayer
              url={activeVideo.link}
              width="100%"
              height="70%"
              className="aspect-square"
              controls
              progressInterval={1000}
              key={activeVideo.link}
              style={{
                borderRadius: "0.5rem",
              }}
            />
          )}
          <div className="details mt-4">
            <h3 className="text-base md:text-xl font-semibold">{activeVideo?.title}</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
