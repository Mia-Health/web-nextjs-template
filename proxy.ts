import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

const PUBLIC_FILE = /\.(.*)$/

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (locale: any) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
    //to take the files from the publisc folder
  if (    
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }  
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'no'; //getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/public|_next/image|assets|images/favicon.svg|sw.js).*)']
}