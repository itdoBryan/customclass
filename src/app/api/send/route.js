import { Resend } from "resend"
import { NextResponse } from "next/server";
const resend = new Resend("re_KYENcxYX_7VeF8EYza3gpaAbZVGGtGMmP");

export async function POST(request){
    const {nombre, email, telefono, mensaje} = await request.json()

    try{
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ["customclassproyect@gmail.com"],
            subject: 'Mensaje recibido CustomClass',
            html: `<p>Hola ${nombre}, hemos recibido el siguiente mensaje:</p> <p> ${mensaje} </p> <p>Le responderemos con la mayor brevedad en el siguiente correo: ${email}. Un saludo!</p>`,
            text:""
        });
        return NextResponse.json({message: "Email enviado"}, {status: 200})
    }catch(error){
        return NextResponse.json({message: "Error"}, {status: 400})
    }
}