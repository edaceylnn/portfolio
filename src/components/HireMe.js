import Image from "next/image";
import React from "react";
import { CircularText } from "./Icons";
import Circular from "../../public/images/Frontend_Developer.png";
import Link from "next/link";

const HireMe = () => {
  return (

  
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:bottom-0 md:absolute">
      
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className={"fill-dark animate-spin-slow"} />

        <Link
          href="mailto:edacey665@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md 
          border border-solid border-dark w-20 h-20 rounded-full cursor-pointer text-center text-sm font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[9px]  "
        >Contact me</Link>
      </div>
    </div>
  );
};

export default HireMe;
