import Link from "next/link"

export function AppleLogin(){
    return(
        <Link href={"/Principal"} className="w-[50%] bg-black flex items-center text-white border-white border-[1px] py-[10px] justify-center items-center rounded-[10px]"> <span className="icon-apple mr-[10px] text-[20px]"/>Apple</Link>
    )
}