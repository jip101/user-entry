'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

//import { cookies } from "next/headers";

export default function Auth() {
    const [input, setInput] = useState('')
    const router = useRouter()


    const handleSubmit = async (e:any) => {
        const response = await fetch('/api/auth', {
            body: JSON.stringify({value: input}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const returnedMessage = await response.json()
        console.log(returnedMessage)

        if (returnedMessage === 'authenticated') {
            console.log('should redirect')
            router.push('/')
        }
    }
    return (
        <>
            <input 
                type="text" 
                onChange={e => setInput(e.currentTarget.value)} 
                onKeyDown={e => e.key === 'Enter' ? handleSubmit(e) : ''}
                className="text-black"
            />
            <button onClick={handleSubmit}>Click me</button>
        </>
    )
}
