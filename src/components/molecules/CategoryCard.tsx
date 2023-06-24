"use client";

import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryCard = ({ label, slug, tagline }: { label: string; slug: string, tagline: string }) => {
  const router = useRouter();
  return (
    <Card className="max-full cursor-pointer py-6 text-center" onClick={() => router.push(`/courses/${slug}`)}>
      <h5 className="text-xl cursor-pointer md:text-3xl font-medium md:font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>{label}</p>
      </h5>
      <p className="font-normal text-lg md:text-xl cursor-pointer text-gray-700 dark:text-gray-400">
          {tagline}
      </p>
    </Card>
  );
};

export default CategoryCard;
