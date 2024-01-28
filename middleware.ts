import { NextRequest, NextResponse } from 'next/server';
import { authRoutes, protectedRoutes } from '@/router/routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const currentUserToken = request.cookies.get('currentUserToken')?.value;

  if (protectedRoutes.includes(pathname) && !currentUserToken) {
    request.cookies.delete('currentUserToken');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('currentUserToken');
    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUserToken) {
    return NextResponse.redirect(url);
  }
}
