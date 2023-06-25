"use client";

import React from "react";
import courseDetail from "../../../json/courses.json";
import { useParams } from "next/navigation";
import { CourseCard } from "@/components";

const CourseList = () => {
  const { course } = useParams();
  const courseData: any = courseDetail.courses_list?.find(
    (item) => item.slug === `courses/${course}`
  );

  return (
    <main className="px-2 md:px-4 max-w-5xl mx-auto">
      <h1 className="font-medium md:font-semibold text-lg md:text-xl mb-2 max-w-fit-500">
        {courseData.name}
      </h1>
      <p className="text-base md:text-lg max-w-2xl mb-2 md:mb-4">
        {courseData.description}
      </p>
      {courseData.courses.length < 1 ? (
        <div className="text-center flex items-center justify-center py-6 min-h-[60vh]">Belum ada Course</div>
      ) : (
        <div className="courses grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {courseData.courses.map((video: any, index: any) => (
              <CourseCard key={index} video={video} />
            ))}
        </div>
      )}
    </main>
  );
};
export default CourseList;
