'use client'
import Link from "next/link"
import { signIn } from "next-auth/react"
export function GoogleLogin(){
    return(
        <button onClick={()=>{signIn()}} className="w-[50%] bg-[#ff0000] text-white border-white border-[1px] py-[10px] justify-center items-center rounded-[10px] flex items-center"> <span className="icon-google-plus mr-[10px] text-[20px]"/> Google</button>
    )
}