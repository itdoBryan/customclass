import { Inter } from "next/font/google";
import "../../styles/globals.css";
import {Header} from "./components/sections/Header"
// import {NProvider} from "./components/providers/NProvider"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NProvider> */}
          <Header/>
          {children}
        {/* </NProvider> */}
      </body>
    </html>
  );
}
