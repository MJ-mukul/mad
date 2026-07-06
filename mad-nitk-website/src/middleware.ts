import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/admin", "/portal", "/profile"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("mad_session")?.value;
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
