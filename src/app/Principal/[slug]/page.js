
import { AsideGeneral} from "../../components/sections/AsideGeneral"
import { AnuncioPrincipal } from "@/app/components/items/AnuncioPrincipal"

const anuncios = [
    {
        id: "price_1PJ5CgH3wmKgI5nz0UmUSBt3",
        title: "Clases de Matematicas",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
        category: "Matematicas",
        price: 20,
        level: "Bachillerato",
        slug: "anuncio1",
        profesor: {
            nombre: "Pablo Escobar",
            description: "Hola, soy Pablo, experto en comercio y marketing. Con más de 10 años de experiencia en el sector y enfocado en transmitir mis conocimientos"
        }
    },
    {
        id: "price_1PJRgsH3wmKgI5nzXQEm8YGf",
        title: "Clases de Física",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium",
        category: "Fisica",
        price: 10,
        level: "ESO",
        slug: "anuncio2",
        profesor: {
            nombre: "Rodrigo Díaz",
            description: "Hola, soy Rodri, titulado en integración social."
        }
    },
    {
        id: "price_1PJRyxH3wmKgI5nzGcj63Y0A",
        title: "Clases de Química",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
        category: "Química",
        price: 20,
        level: "Bachillerato",
        slug: "anuncio3",
        profesor: {
            nombre: "Pablo Escobar",
            description: "Hola, soy Pablo, experto en comercio y marketing. Con más de 10 años de experiencia en el sector y enfocado en transmitir mis conocimientos"
        }
    },
    {
        id: "price_1PJRzYH3wmKgI5nzMHmyOVfc",
        title: "Clases de Música",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium",
        category: "Música",
        price: 10,
        level: "ESO",
        slug: "anuncio4",
        profesor: {
            nombre: "Rodrigo Díaz",
            description: "Hola, soy Rodri, titulado en integración social."
        }
    },
    {
        id: "price_1PJS0IH3wmKgI5nzsWhYPR4S",
        title: "Clases de Castellano",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
        category: "Castellano",
        price: 20,
        level: "Bachillerato",
        slug: "anuncio5",
        profesor: {
            nombre: "Pablo Escobar",
            description: "Hola, soy Pablo, experto en comercio y marketing. Con más de 10 años de experiencia en el sector y enfocado en transmitir mis conocimientos"
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
            nombre: "Rodrigo Díaz",
            description: "Hola, soy Rodri, titulado en integración social."
        }
    },
    
]

const searchProductBySlug = (slug)=>{
    var resolve
    anuncios.map((anuncio)=>{
        if(anuncio.slug == slug){
            resolve = anuncio 
        }
    })
    return resolve
}
export default function Slug({params}){
    const {slug} = params;
    var anuncio = searchProductBySlug(slug);
    return(
        <main className="w-screen h-full flex flex-col sm:flex-row bg-[#2271b3]">
            <div className="w-full sm:w-[75%] flex flex-col items-center mt-[8%] ">
                <AnuncioPrincipal anuncio={anuncio}/>
            </div>
            <AsideGeneral/>
        </main>
    )
}