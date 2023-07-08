"use client";

import { Navbar } from "flowbite-react";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarApp() {
  const router = useRouter();
  const path = usePathname();
  return (
    <Navbar fluid rounded className="py-6 md:mb-4 max-w-5xl mx-auto">
      <Navbar.Brand onClick={() => router.push("/")}>
        <span className="cursor-pointer self-center whitespace-nowrap text-2xl font-semibold dark:text-white border-b-4 border-blue-500">
          9Tech Course
        </span>
      </Navbar.Brand>
        <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active={path === "/"}
          className="text-base font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link
          active={path.includes("/courses")}
          className="text-base font-semibold cursor-pointer"
          onClick={() => router.push("/courses")}
        >
          Courses
        </Navbar.Link>
        <Navbar.Link
          active={path.includes("/about-us")}
          className="text-base font-semibold cursor-pointer"
          onClick={() => router.push("/about-us")}
        >
          About Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
