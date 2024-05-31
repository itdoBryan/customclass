'use client'
import { AsideContacto } from "../components/sections/AsideContacto"
import { useState } from "react"

export default function Contacto(){
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    const enviarMensaje = async (event)=>{
        event.preventDefault()
        const nombre = document.getElementById("inputName").value
        const email = document.getElementById("inputEmail").value
        const telefono =document.getElementById("inputTelf").value
        const mensaje = document.getElementById("inputMsg").value

      

        const res = await fetch("../api/send",{
            method: "POST",
            body: JSON.stringify({
                nombre: nombre,
                email: email,
                telefono: telefono,
                mensaje: mensaje
            }),
            headers:{
                'Content-Type': 'application/json'
            }

        })
        const data = await res.json()
        if(data.message == "Email enviado"){
            setEnviado(true)
            document.getElementById("inputName").value = ""
            document.getElementById("inputEmail").value = ""
            document.getElementById("inputTelf").value = ""
            document.getElementById("inputMsg").value = ""
        }else{
            setError(true)
        }

        setTimeout(() => {
            setEnviado(false)
            setError(false)
          }, "3000");
    }
    return(
        <main className="w-screen h-screen flex flex-col sm:flex-row">
            <div className="w-full sm:w-[75%]">
                <section className="w-[85%] mt-[50px] mx-auto flex flex-col">
                    <div className="w-full mx-auto sm:mt-[108px] flex flex-col sm:flex-row mb-[165px]">
                        <div className="w-[51%]">
                            <p>Contáctanos</p>
                            <p className="text-[15px] mt-[11px]"> <span className="icon-phone text-[14px] mr-[14px]"/>93 100 6211</p>
                            <p className="text-[15px] mt-[13px]"> <span className="icon-mail text-[14px] mr-[14px]"/>customclassproyect@gmail.com</p>

                            <p className="mt-[53px]">Síguenos</p>
                            <p className="text-[15px] mt-[13px]"> <span className="icon-instagram text-[14px] mr-[14px]"/>Instagram</p>
                            <p className="text-[15px] mt-[16px]"> <span className="icon-fb text-[14px] mr-[14px]"/>Facebook</p>
                            <p className="text-[15px] mt-[16px]"> <span className="icon-youtube text-[14px] mr-[14px]"/>Youtube</p>
                            <p className="text-[15px] mt-[16px]"> <span className="icon-tiktok text-[14px] mr-[14px]"/>TikTok</p>
        
                        </div>
                        <form className="w-[90%] sm:w-[41%] mt-[30px] sm:mt-0 uppercase flex flex-col">
                            <label className="text-[10px]">nombre<sup>*</sup></label>
                            <input type="text" name="nombre" id="inputName" className="border-b border-black mt-[20px]"/>
                            <label className="mt-[40px] text-[10px]">email<sup>*</sup></label>
                            <input type="email" name="email" id="inputEmail" className="border-b border-black mt-[20px]"/>
                            <label className="mt-[40px] text-[10px]">telefono<sup>*</sup></label>
                            <input type="fel" name="telf" id="inputTelf" className="border-b border-black mt-[20px]"/>
                            <label className="mt-[40px] text-[10px]">mensaje</label>
                            <input type="text" name="mensaje" id="inputMsg" className="border-b border-black mt-[20px] mb-[30px]"/>
                            <button onClick={()=>{enviarMensaje(event)}} className="bg-[#00569D] text-white py-[5px] rounded">Enviar</button>
                            <strong className={enviado ? "text-center mt-[10px] text-[#008000]" : "hidden"}>Mensaje Enviado </strong>
                            <strong className={error ? "text-center mt-[10px] text-[#FF0000]" : "hidden"}>Error </strong>
                        </form>
                    </div>
                </section>
            </div>
            <AsideContacto/>
        </main>
    )
}