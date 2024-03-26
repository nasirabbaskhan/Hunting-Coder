import React from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Link from "next/link";
type Book = {
  message: string;
};
async function getData() {
  const response = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  const data = response.json();
  return data;
}

export default async function Blog() {
  const book: Book = await getData();
  console.log(book);
  return (
    <>
      {/* step 1: collect all the files from blogdata directory
   Iterate throgh them and Display them */}
      <div className="flex flex-col justify-between px-96 pt-12">
        <div>
          <Link href={"/blogposts/JavaScript"}>
            {" "}
            <p className=" font-bold text-black pb-2 cursor-pointer">
              How to learn JavaScript in 2023
            </p>
          </Link>
          <p className="pb-2">
            JavaScript is a language that used to buld powerfull website{" "}
          </p>
        </div>
        <div>
          <Link href={"/blogposts/TypeScript"}>
            <p className="font-bold text-black pb-2 cursor-pointer">
              How to learn TypeScript in 2023
            </p>
          </Link>
          <p className="pb-2">
            TypeScript is a language that used to buld powerfull website{" "}
          </p>
        </div>
        <div>
          <Link href={"/blogposts/NextJS"}>
            <p className="font-bold text-black pb-2 cursor-pointer">
              How to learn Next JS in 2023
            </p>
          </Link>
          <p>JavaScript is a language that used to buld powerfull website </p>
        </div>
      </div>
      <div>{book.message}</div>
    </>
  );
}
