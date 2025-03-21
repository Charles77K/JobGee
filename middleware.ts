import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./providers/Routes";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("token")?.value;

  if (protectedRoutes.includes(request.nextUrl.pathname) && !accessToken) {
    request.cookies.delete("accessToken");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("accessToken");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
