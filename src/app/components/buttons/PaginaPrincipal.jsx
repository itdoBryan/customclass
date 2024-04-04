import Link from "next/link"
export function PaginaPrincipal(){
    return(
        <Link href={"/Principal"} className="w-[50%] text-center bg-white border-black border-[1px] py-[10px] justify-center items-center rounded-[10px]">Pagina Principal</Link>
    )
}