import Link from "next/link"
export function LogOut(){
    return(
        <Link href={"/"} className="w-[50%] text-center bg-white border-black border-[1px] py-[10px] justify-center items-center rounded-[10px]">Cerrar Sesión</Link>
    )
}