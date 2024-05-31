'use client'
// import { signIn } from "next-auth/react"
 
export function GoogleLogin(){
    return(
        <button className="w-[50%] bg-[#ff0000] text-white border-white border-[1px] py-[10px] justify-center items-center rounded-[10px] flex items-center"
        // onClick={()=>{signIn("google")}
            onClick={()=>{window.location.href = window.location.href + "/Principal"}}
        
        >
             <span className="icon-google-plus mr-[10px] text-[20px]"/> Google
        </button>
    )
}