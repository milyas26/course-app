import { CategoryCard } from "@/components";
import React from "react";
import courseData from '../../json/courses.json'

export interface CategoryInterface {
  id: number;
  label: string;
  slug: string;
  tagline: string;
}

const Course = () => {
  const categories: CategoryInterface[] = courseData.categories
  return (
    <main className="px-2 md:px-4 max-w-5xl mx-auto">
      <h1 className="font-medium text-lg md:font-bold md:text-xl mb-2 pb-1 border-b-2 border-blue-500 max-w-fit">COURSES</h1>
      <h2 className="md:font-medium text-base md:text-lg max-w-lg mb-4">
        Discover and Elevate Your Skills with Expertly Chosen YouTube Courses
        for Unparalleled Skill Upgrades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          categories.map((category: CategoryInterface, index) => (
            <CategoryCard label={category.label} slug={category.slug} tagline={category.tagline} key={index} />
          ))
        }
      </div>
    </main>
  );
};

export default Course;
