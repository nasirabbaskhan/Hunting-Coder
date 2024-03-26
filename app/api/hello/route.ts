// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello every one" });

  // return NextResponse.json([
  //   {
  //     title: "How to learn javaScript",
  //     content:
  //       "Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sitvLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sit  ",
  //     auther: "Nasir abbas",
  //   },
  // ]);

  // to make api
  // const url = request.nextUrl; // for query parameter in your search term
  // if (url.searchParams.has("name")) {
  //   // to confirm your search term has name are not
  //   const name = url.searchParams.get("name");
  //   return NextResponse.json({ name: name }); // return in json form
  // } else {
  //   return new NextResponse("please enter name in search params");
  //}
  //   return new NextResponse("hello word");
}
