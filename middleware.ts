import { NextRequest, NextResponse } from 'next/server';
import { authRoutes, protectedRoutes } from '@/router/routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const currentUserToken = request.cookies.get('currentUserToken')?.value;

  if (authRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (protectedRoutes.includes(pathname) && !currentUserToken) {
    request.cookies.delete('currentUserToken');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('currentUserToken');
    return response;
  }

  if (!authRoutes.includes(pathname) && currentUserToken) {
    return NextResponse.next();
  }
}
