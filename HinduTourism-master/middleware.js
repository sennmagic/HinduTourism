import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const accessToken = req.cookies.get("access_token")?.value; // Get token from cookies
  const url = req.nextUrl;

  if (accessToken && url.pathname.startsWith("/auth/login")) {
    // Redirect authenticated users away from login page
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (!accessToken && url.pathname.startsWith("/admin")) {
    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next(); // Allow access to other pages
}

// Apply middleware to both /admin and /auth/login routes
export const config = {
  matcher: ["/admin/:path*", "/auth/login"],
};
