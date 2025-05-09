import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
    
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // Redirige usando URL absoluta basada en `request.url`
        return Response.redirect(new URL('/dashboard', request.nextUrl.origin));
      }
    
      return true;
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;