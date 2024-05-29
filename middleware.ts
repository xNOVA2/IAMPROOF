import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPaths = ["/"];
  const isPublicPath = publicPaths.includes(path);

  const privatePaths = [
    "/billing",
    "/dashboard",
    "/data-center",
    "/directory",
    "/reporting",
    "/security",
  ];
  const isPrivatePath = privatePaths.includes(path);

  const token = request.cookies.get("accessToken")?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/billing",
    "/dashboard",
    "/data-center",
    "/directory",
    "/reporting",
    "/security",
  ],
};
