"use client";

import { CategoryCard, CourseCard } from "@/components";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { CategoryInterface } from "./courses/page";
import { Key } from "react";
import courseData from "../json/courses.json";

export default function Home() {
  const router = useRouter();
  const categories: CategoryInterface[] = courseData.best_categories;
  return (
    <main className="px-2 md:px-4 max-w-5xl mx-auto">
      <div className="flex items-center md:gap-4 flex-col md:flex-row mb-4 md:mb-6">
        <div className="cta order-2 md:order-1 md:w-1/2">
          <h1 className="text-xl font-semibold mb-2">
            UPGRADE YOUR SKILL NOW!
          </h1>
          <p className="mb-4 text-lg">
            Unleash Your Full Potential, Embark on a Journey of Learning,
            Growth, and Success with Our Comprehensive Courses App
          </p>
          <Button
            color="success"
            className="mb-2"
            onClick={() => router.push("/courses")}
          >
            Explore Courses
            <BsArrowRight className="ml-2 font-bold" />
          </Button>
        </div>
        <img
          width={800}
          height={800}
          className="order-1 md:order-2 rounded mb-4 md:w-1/2"
          src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
          alt="courses"
        />
      </div>
      <div className="selected mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <h2 className="font-medium md:font-semibold text-lg md:text-xl mb-2 max-w-fit-500">
            BEST CATEGORIES
          </h2>
          <Button color="gray" onClick={() => router.push("/courses")}>
            Explore More <BsArrowRight className="ml-2 font-bold"  />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          {categories.map(
            (category: CategoryInterface, index: Key | null | undefined) => (
              <CategoryCard
                label={category.label}
                slug={category.slug}
                tagline={category.tagline}
                key={index}
              />
            )
          )}
        </div>
      </div>
      <div className="selected">
        <h2 className="font-medium md:font-semibold text-lg md:text-xl mb-2 max-w-fit-500">
          SELECTED COURSES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {courseData.selected_courses.map((video: any, index: any) => (
              <CourseCard key={index} video={video} />
            ))}
        </div>
      </div>
    </main>
  );
}
