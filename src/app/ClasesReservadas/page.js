'use client'
import { AsideGeneral} from "../components/sections/AsideGeneral"


export default function ClasesReservadas(){

    const clasesReservadas =
    [
        {
            title: "Clases de física",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "fisica",
            price: 10,
            level: "ESO",
            id: 1,
            profesor: {
                nombre: "Rodrigo Díaz",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            title: "Clases de Matemáticas",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Matemáticas",
            price: 10,
            level: "ESO",
            id: 2,
            profesor: {
                nombre: "Julio Cesar",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            title: "Clases de Tecnología",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Tecnología",
            price: 10,
            level: "ESO",
            id: 3,
            profesor: {
                nombre: "Pablo Motos",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            id: "price_1PJS13H3wmKgI5nzyc5n4V2o",
            title: "Clases de Catalan",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium",
            category: "Catalan",
            price: 10,
            level: "ESO",
            slug: "anuncio6",
            profesor: {
                nombre: "Pablo Motos",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            title: "Clases de física",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "fisica",
            price: 10,
            level: "ESO",
            id: 1,
            profesor: {
                nombre: "Rodrigo Díaz",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            title: "Clases de Matemáticas",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Matemáticas",
            price: 10,
            level: "ESO",
            id: 2,
            profesor: {
                nombre: "Julio Cesar",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            title: "Clases de Tecnología",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Tecnología",
            price: 10,
            level: "ESO",
            id: 3,
            profesor: {
                nombre: "Pablo Motos",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
        {
            id: "price_1PJS13H3wmKgI5nzyc5n4V2o",
            title: "Clases de Catalan",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium",
            category: "Catalan",
            price: 10,
            level: "ESO",
            slug: "anuncio6",
            profesor: {
                nombre: "Pablo Motos",
                description: "Hola, soy Rodri, titulado en integración social."
            }
        },
    ];

    return(
        <main className="w-screen h-full flex flex-col sm:flex-row bg-[#2271b3]">
            <div className="w-full sm:w-[75%] flex flex-col items-center mb-[20px]">

                <h1 className="font-bold text-white text-[40px] text-center text-center my-8">Mis Reservas</h1>
                <div className="w-[90%] sm:w-[70%] gap-8 p-8 bg-white rounded flex flex-col items-center h-[500px] overflow-y-scroll no-scrollbar">

                    {
                        clasesReservadas.map((reserva)=>(
                            <p key={reserva.id}>{`Tienes una clase de ${reserva.category} con el profesor ${reserva.profesor.nombre}`}</p>
                        ))
                    }
                </div>
            </div>
            <AsideGeneral/>
        </main>
    )
}