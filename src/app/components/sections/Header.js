import Image from "next/image";

export function Header(){
    return(
        <header className="flex w-screen absolute">
            <div className="w-[90%] h-[80px] items-center justify-between flex mx-auto">
                <Image src="/logotipo.webp" width={350} height={50} alt="logotipo" className="w-[200px] sm:w-[350px] h-[30] sm:h-[60px] sm:mt-[50px] sm:ml-[5%]"/>
                <span className="icon-mail text-[30px] text-black flex sm:hidden"/>
            </div>
        </header>
    )
}