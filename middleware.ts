import { NextRequest, NextResponse } from 'next/server';
import { authRoutes, protectedRoutes } from '@/router/routes';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const currentUserToken = request.cookies.get('currentUser')?.value;

  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUserToken || isTokenExpired(currentUserToken))
  ) {
    request.cookies.delete('currentUser');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('currentUser');

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUserToken) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }
}

function isTokenExpired(token: string): boolean {
  try {
    const decodedToken = jwt.decode(token);

    if (!decodedToken || typeof decodedToken === 'string') {
      return true;
    }

    return Date.now() > decodedToken.expiredAt;
  } catch (error) {
    return true;
  }
}
