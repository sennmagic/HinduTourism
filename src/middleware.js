import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const accessToken = req.cookies.get("access_token")?.value; // Get token from cookies
console.log(accessToken)
  if (!accessToken) {
    // Redirect to login page if no access token is found
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next(); // Allow access to the page
}

// Apply middleware only to /admin routes
export const config = {
  matcher: "/admin/:path*",
};
