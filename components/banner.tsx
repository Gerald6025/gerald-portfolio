"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url(/jer.jpg)] bg-cover bg-center h-[90vh]  text-center  w-full flex flex-col md:flex-row justify-center items-center px-4 md:px-20">
      <div className="bg-white hidden md:flex flex-row md:flex-col justify-center items-center gap-2 md:gap-4 p-4 md:p-0  shadow-md absolute left-0 top-1/2 transform -translate-y-1/2">
        <Link href="https://www.linkedin.com/in/gerald-chibanda-aa3689286/">
          <FaLinkedin size={30} className="m-1 md:m-4 hover:text-blue-700" />
        </Link>
        <Link href="https://www.instagram.com/trigga_92/">
          <FaInstagram size={30} className="m-1 md:m-4 hover:text-pink-500" />
        </Link>
        <Link href="https://twitter.com/GeraldChibanda">
          <FaTwitter size={30} className="m-1 md:m-4 hover:text-blue-400" />
        </Link>
        <Link href="https://github.com/Gerald6025">
          <FaGithub size={30} className="m-1 md:m-4 hover:text-gray-800" />
        </Link>
      </div>

      <div className="px-2 md:px-20 mt-6 md:mt-0 flex  flex-col gap-3 items-center justify-center text-white">
        <h1 className="font-black text-3xl sm:text-4xl md:text-6xl">
          HEY, I&apos;M GERALD CHIBANDA
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-center pt-4 max-w-4xl  ">
          A result-driven Web Developer specializing in building, optimizing,
          and managing high-performing websites and web applications that
          contribute directly to product success.
        </p>
      </div>
    </div>
  );
};

export default Banner;
