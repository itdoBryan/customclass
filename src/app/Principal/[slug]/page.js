
import { AsideGeneral} from "../../components/sections/AsideGeneral"
import { AnuncioPrincipal } from "@/app/components/items/AnuncioPrincipal"

const anuncios = [
    {
        title: "Clases de matematicas",
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
        title: "Clases de física",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
        category: "fisica",
        price: 10,
        level: "ESO",
        slug: "anuncio2",
        profesor: {
            nombre: "Albert Einstein",
            description: "Hola, soy Albert, titulado en física y química."
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