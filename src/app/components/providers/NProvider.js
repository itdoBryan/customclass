'use client'
import { SessionProvider} from "next-auth/react"


export function NProvider({children}){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

