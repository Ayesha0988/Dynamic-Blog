import React from "react";
import Image from "next/image";

export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-0">
      <div className="flex items-center animation-fadeIn">
      <Image
  className="w-16 h-16 rounded-full mr-4 -mt-14 object-cover border border-red-500"
  src="/images/eshusa.jpg" 
  alt="Author Image"
  width={500}
  height={300}
/>

        <div>
          <h3 className="text-xl font-bold">Ayesha Saeed</h3>
          <p className="text-slate-500">Web Developer | Medical Student</p>

          <div className="grid grid-cols-2 gap-4 justify-center mt-4">
   <a
   href="https://github.com/Ayesha0988"
    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 w-24 rounded-md transition duration-300">GitHub
    </a>

    <a
   href="https://www.linkedin.com/in/ayesha-saeed-a99739306"
    className="bg-blue-500  hover:bg-blue-700 text-white px-4 py-2 w-24 rounded-md transition duration-300">LinkedIn
    </a>
    
  </div>
        </div>
      </div>
    </div>
  );
}
