
import { LoginSection} from "./components/sections/LoginSection"

export default function Home() {
  
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
