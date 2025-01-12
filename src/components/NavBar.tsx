"use client";
import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <header className="text-black bg-white body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"http://localhost:3000/"}
      className="mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        Home
      </Link>

      <Link href={"https://www.linkedin.com/in/ayesha-saeed-a99739306"}
      className="mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        About
      </Link>

      <Link href={"http://localhost:3000/"}
      className="mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        Blog
      </Link>

      <Link href={"https://www.linkedin.com/in/ayesha-saeed-a99739306"}
      className="mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        Contact
      </Link>
    </nav>
    <a href="https://www.linkedin.com/in/ayesha-saeed-a99739306" target="_blank" rel="noopener noreferrer">
  <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-white mt-4 md:mt-0">
    Follow Now
    <svg
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className="w-4 h-4 ml-1"
  viewBox="0 0 24 24"
>
  <path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
  </button>
</a>


  </div>
</header>
  );
}
