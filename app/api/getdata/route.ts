// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    title: "How to learn NextJS",
    content:
      "Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sit Lorem, ipsum dolor sitvLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ipsum dolor sitLorem, ",
    auther: "Nasir abbas",
  });
  // to make api
  // const url = request.nextUrl;
  // if (url.searchParams.has("name")) {
  //   // toconfirm your search term has name are not
  //   const name = url.searchParams.get("name");
  //   return new NextResponse("name from" + " " + name);
  // } else {
  //   return new NextResponse("please enter name in search params");
  // }
  //   return new NextResponse("hello word");
}
