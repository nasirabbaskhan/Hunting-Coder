import { link } from "fs";
// import Image from 'next/image'
import Link from "next/link";
import Navbar from "../Components/Navbar";

type Book = {
  title: string;
  content: string;
  auther: string;
};

async function getData() {
  const response = await fetch("http://localhost:3001/api/getdata");
  const data = response.json();
  return data;
}

export default async function Post() {
  const book: Book = await getData();
  console.log(book);
  return (
    <>
      <p>This About page</p>
      <div>{book.title}</div>

      <div>{book.content}</div>
      <div>{book.auther}</div>
    </>
  );
}
