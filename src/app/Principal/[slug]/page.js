import { AsideGeneral} from "../../components/sections/AsideGeneral"
import { ReservarClaseAnuncio} from "../../components/buttons/ReservarClaseAnuncio"
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
export default function slug({params}){
    const {slug} = params;
    var anuncio = searchProductBySlug(slug);
    return(
        <main className="w-screen h-full flex flex-col sm:flex-row bg-[#2271b3]">
            <div className="w-full sm:w-[75%] flex flex-col items-center mt-[8%] ">
                <div className="w-[85%] h-[500px] flex bg-white rounded mt-[5%] items-center">
                    <div className="flex flex-col w-[85%] h-full mx-auto mt-[10%] gap-y-[5%]">
                        <h2 className="font-bold text-[20px]">{anuncio.title}</h2>
                        <p>{anuncio.description}</p>
                        <div>
                            <b>{anuncio.profesor.nombre}</b>
                            <p>{anuncio.profesor.description}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><b>Precio: </b> {anuncio.price}€</p>
                            <p><b>Materia: </b> {anuncio.category}</p>
                            <p><b>Nivel: </b> {anuncio.level}</p>
                            <ReservarClaseAnuncio/>
                        </div>
                    </div>
                </div>
            </div>
            <AsideGeneral/>
        </main>
    )
}