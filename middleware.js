import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("inside middleware");
  const cookieStore = cookies();

  // if (!cookieStore.has("token")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}
