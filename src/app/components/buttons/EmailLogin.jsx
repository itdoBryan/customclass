import Link from "next/link"
export function EmailLogin(){
    return(
        <Link href={"/Principal"} className="w-[50%] bg-[#008000] flex items-center text-white border-white border-[1px] py-[10px] justify-center items-center rounded-[10px]"> <span className="icon-mail mr-[10px] text-[20px]"/>Email</Link>
    )
}