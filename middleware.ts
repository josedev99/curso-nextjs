import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  //matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  matcher: [
     /*
      * Middleware se aplica a todas las rutas excepto:
      * - /api/*
      * - /_next/*
      * - archivos estáticos como .png, .jpg, .ico
      */
     '/((?!api|_next|favicon.ico|.*\\.(png|jpg|jpeg|svg|ico)$).*)',
   ],
};
