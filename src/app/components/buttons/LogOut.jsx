'use client'
import {useSession, signOut } from "next-auth/react"

export function LogOut(){
    const sesion = useSession()
    if(sesion.status == "unauthenticated"){location.href = "http://localhost:3000/"}
    return(
        <button className="w-[50%] text-center bg-white border-black border-[1px] py-[10px] justify-center items-center rounded-[10px]"
        onClick={()=>{
            signOut()
            console.log(sesion.status)
        }}
        >
            Cerrar Sesión
        </button>
    )
}