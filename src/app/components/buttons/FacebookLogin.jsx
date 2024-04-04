import Link from "next/link"
export function FacebookLogin(){
    return(
        <Link href={"/Principal"} className="w-[50%] bg-[#0000ff] flex items-center text-white border-white border-[1px] py-[10px] justify-center items-center rounded-[10px]"> <span className="icon-facebook mr-[10px] text-[20px]"/>Facebook</Link>
    )
}