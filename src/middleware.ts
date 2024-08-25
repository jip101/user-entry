import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const token = request.cookies.get('authorization')
    console.log(token)
    const url = request.nextUrl.pathname
    console.log(url)
    if (url.startsWith('/auth') || url.startsWith('/api/auth')) {
        if (url.startsWith('/auth') && token) {
            //response.cookies.set('name', token.value)

            console.log('redirect away from auth')
            console.log(url)
            return NextResponse.redirect(new URL('/', request.url))
        }
        else {
            console.log('triggered')
            return response
        }
    }
    if (!token) {
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    if (request.headers.has('authorization')) {
        console.log(request.headers.get('authorization'))
    }
    else {
        //console.log("it's not here")
    }

    console.log("You've hit the end of the road")
  return response
}

function checkAuth(auth: string): boolean {
    return auth === 'admin' ? true : false
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // This matcher will apply the middleware to all paths except those starting with _next/static, _next/image, and favicon.ico
};
/*
export const config = {
    matcher: [
        '/((?!auth|api/auth).*)', 
    ],
};
*/