import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // Redirigir a esta página si no ha iniciado sesión
  },
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        // Solo usuarios logueados pueden acceder a /dashboard
        return isLoggedIn;
      }

      if (isLoggedIn && (nextUrl.pathname === '/' || nextUrl.pathname === '/login')) {
        // Si el usuario está logueado y va a la raíz o a login, redirigir al dashboard
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true; // Permitir otras rutas
    },
  },
  providers: [], // <-- IMPORTANTE: Necesitarás agregar al menos 1 proveedor real aquí
} satisfies NextAuthConfig;
