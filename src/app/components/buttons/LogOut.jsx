'use client'
import Link from "next/link"
import { signOut} from "next-auth/react"
export function LogOut(){
    return(
        <button onClick={()=>{
            signOut();
            location.href = "http://localhost:3000"
        }} className="w-[50%] text-center bg-white border-black border-[1px] py-[10px] justify-center items-center rounded-[10px]">Cerrar Sesión</button>
    )
}