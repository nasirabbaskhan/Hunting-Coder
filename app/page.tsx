import { link } from "fs";

// import Image from 'next/image'
import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
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

      <p>This is Home page Also</p>
    </>
  );
}
