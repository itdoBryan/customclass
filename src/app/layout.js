import { Inter } from "next/font/google";
import "../../styles/globals.css";
import {Header} from "./components/sections/Header"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
