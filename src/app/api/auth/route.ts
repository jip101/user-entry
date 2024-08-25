import { NextRequest, NextResponse } from "next/server"

export async function GET(request:any) {
    console.log('second trigger')
    return NextResponse.json({ message: 'this is a test message' })
}

const authUsers = [
    'jeremy', 
    'donna', 
    'jaime', 
    'dorothy', 
    'kayla', 
    'brady', 
    'amanda', 
    'admin'
]

export async function POST (request: Request) {
    const username = await request.json()
    console.log(username.value)
    if (authUsers.includes(username.value)) {
        return new Response(JSON.stringify('authenticated'), {
            headers: {
                'Set-Cookie': [
                    `authorization=${username.value}; HttpOnly; SameSite=Strict; Path=/`,
                    `name=${username.value}; SameSite=Strict; Path=/`
                ].join(', ')
            },
        })
    }
    else {
        return new Response(JSON.stringify('Incorrect name entered'))
    }

}