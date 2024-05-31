'use client'
import { LoginSection} from "./components/sections/LoginSection"
// import { useSession } from "next-auth/react";

export default function Home() {
  // const sesion = useSession()
  // if(sesion.status=="authenticated"){location.href = location.href + "/Principal"}
  // console.log(sesion)
  return (
      <main className="w-screen h-full flex flex-col sm:flex-row">
        <div className="w-full sm:w-[75%] flex items-center">
          <div className="w-full bg-cover no-repeat h-[300px] sm:h-full flex items-center justify-end bg-[url('/estudiante.webp')]">
            
          </div>
        </div>
        <LoginSection/>
      </main>
  );
}
