import Image from "next/image";
import { Contacto } from "../buttons/Contacto";
import { ClasesReservadas } from "../buttons/ClasesReservadas";
import { MisAnuncios } from "../buttons/MisAnuncios";
import { LogOut } from "../buttons/LogOut";
import { PaginaPrincipal } from "../buttons/PaginaPrincipal";

export function AsideGeneral(){
    return(
        <aside className="w-full sm:w-[25%] sm:min-w-[400px] min-h-[800px] sm:min-h-screen bg-[#00569D] flex flex-col items-center pb-[50px] sm:pb-0">
            <Image src={"/fotoperfil.webp"} width={150} height={50} alt="foto de perfil" className="mt-[50px]" />
            <p className="text-white">pppppppppppppp</p>
            <p className="text-white">fffffffffffffffff</p>

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