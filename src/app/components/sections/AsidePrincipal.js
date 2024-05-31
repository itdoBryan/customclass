'use client'
import Image from "next/image";
import { Contacto } from "../buttons/Contacto";
import { ClasesReservadas } from "../buttons/ClasesReservadas";
import { MisAnuncios } from "../buttons/MisAnuncios";
import { LogOut} from "../buttons/LogOut";
// import { useSession } from "next-auth/react";

export function AsidePrincipal(){
    // const sesion = useSession()
    var nombre = "Usuario Invitado"
    var correo = "usuario@invitado.com"
    var imgUser = "/fotoperfil.webp"
    // if(sesion.status=="authenticated"){
    //     nombre = sesion.data.user.name
    //     correo = sesion.data.user.email
    //     imgUser = sesion.data.user.image
    // }

    console.log(imgUser)
    return(
        <aside className={"w-full sm:w-[25%] sm:min-w-[400px] h-screen min-h-[850px] bg-[#00569D] flex flex-col items-center"}>
            <Image src={imgUser} width={150} height={50} alt="foto de perfil" className="mt-[30px] rounded-full" />
            <p className="text-white">{nombre}</p>
            <p className="text-white">{correo}</p>
            <form className="my-auto gap-y-[20px] flex flex-col w-full">
                <div className="flex flex-col text-white items-center">
                    <label className="text-[15px] mb-[10px]">Elige el nivel</label>
                    <select id="nivel" className="bg-black w-[50%] h-[40px] flex items-center justify-center rounded-[5px] border-white border-[1px]">
                        <optgroup label="ESO">
                            <option>1r curso</option>
                            <option>2d curso</option>
                            <option>3r curso</option>
                            <option>4o curso</option>
                        </optgroup>
                        <optgroup label="Ciclo Formativo">
                            <option>Grado Superior</option>
                            <option>Grado Medio</option>
                        </optgroup>
                        <optgroup label="Universidad">
                            <option>Ingenieria</option>
                            <option>Fisica</option>
                        </optgroup>
                    </select>
                </div>
                <div className="flex flex-col text-white items-center w-full">
                    <label className="text-[15px] mb-[10px]">Elige el Materia</label>
                    <select id="nivel" className="bg-black w-[50%] h-[40px] flex items-center justify-center rounded-[5px] border-white border-[1px]">
                        <optgroup label="Ciencias">
                            <option>Fisica</option>
                            <option>Matemáticas</option>
                            <option>Química</option>
                            <option>Tecnología</option>
                        </optgroup>
                        <optgroup label="Ciclo Formativo">
                            <option>Grado Superior</option>
                            <option>Grado Medio</option>
                        </optgroup>
                        <optgroup label="Universidad">
                            <option>Ingenieria</option>
                            <option>Fisica</option>
                        </optgroup>
                    </select>
                </div>
            </form>
            <div className="flex flex-col gap-y-[20px] w-full items-center my-auto">
                <Contacto/>
                <ClasesReservadas/>
                <MisAnuncios/>
                <LogOut/>
            </div>
        </aside>
    )
}