import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const protectedRoutes = ['/chess/profile'];
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    !request.cookies.has('connectionToken')
  ) {
    return NextResponse.redirect(new URL('/chess/', request.url));
  }
}

export const config = {
  matcher: '/chess/:path*',
};
