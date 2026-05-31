import { NextResponse } from "next/server";

export async function proxy(request) {
    const session = await auth.api.getsession({
        headers: await headers()
    })

    if(!session){
        return NextResponse.redirect(new URL("/home", request.url));
    }
}

export const config = {
  matcher: ["/add-tutor" , '/tutors/:path', "/profile"]
};
