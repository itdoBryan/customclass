import Image from "next/image";

export function Header(){
    return(
        <header className="flex w-screen h-[120px] bg-[#061a2d]">
            <div className="w-[90%] h-[80px] items-center flex mx-auto">
                <Image src="/logotipo.webp" width={350} height={50} alt="logotipo" className="w-[350px] h-[60px] mt-[50px] mx-auto sm:ml-[5%]"/>
            </div>
        </header>
    )
}