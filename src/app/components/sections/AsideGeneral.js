'use client'
import Image from "next/image";
import { Contacto } from "../buttons/Contacto";
import { ClasesReservadas } from "../buttons/ClasesReservadas";
import { MisAnuncios } from "../buttons/MisAnuncios";
import { LogOut } from "../buttons/LogOut";
import { PaginaPrincipal } from "../buttons/PaginaPrincipal";
// import { useSession } from "next-auth/react";
export function AsideGeneral(){
    // const sesion = useSession()
    var nombre = "Usuario invitado"
    var correo = "usuario@invitado.com"
    var imgUser = "/fotoperfil.webp"
    // if(sesion.status=="authenticated"){
    //     nombre = sesion.data.user.name
    //     correo = sesion.data.user.email
    //     imgUser = sesion.data.user.image
    // }
    return(
        <aside className="w-full sm:w-[25%] sm:min-w-[400px] min-h-[800px] sm:min-h-screen bg-[#00569D] flex flex-col items-center pb-[50px] sm:pb-0">
            <Image src={imgUser} width={150} height={50} alt="foto de perfil" className="mt-[50px] rounded-full" />
            <p className="text-white">{nombre}</p>
            <p className="text-white">{correo}</p>

            <div className="flex flex-col gap-y-[20px] w-full items-center my-auto">
                <PaginaPrincipal/>
                <Contacto/>
                <ClasesReservadas/>
                <MisAnuncios/>
                <LogOut/>
            </div>
        </aside>
    )
}