'use client'
import { AsideGeneral} from "../components/sections/AsideGeneral"
import { MiAnuncioItem } from "../components/items/MiAnuncioItem"
import { useState } from "react"


export default function slug({params}){
    const [anuncios, setAnuncios] = useState([
        {
            title: "Clases de física",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "fisica",
            price: 10,
            level: "ESO",
            id: 1
        },
        {
            title: "Clases de Matemáticas",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Matemáticas",
            price: 10,
            level: "ESO",
            id: 2
        },
        {
            title: "Clases de Tecnología",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.",
            category: "Tecnología",
            price: 10,
            level: "ESO",
            id: 3
        },
    ]) 

    const deleteAnuncio = (pos)=>{
        var array = []
        for(let i = 0; i < anuncios.length; i++){
            if(i != pos){
                array.push(anuncios[i])
            }
        }
        setAnuncios(array)
    }
    return(
        <main className="w-screen h-full flex flex-col sm:flex-row bg-[#2271b3]">
            <div className="w-full sm:w-[75%] flex flex-col items-center mt-[8%] ">
                <h1 className="font-bold text-white text-[40px]">Mis Anuncios</h1>
                {
                    anuncios.map((anuncio)=>(
                        <MiAnuncioItem anuncio={anuncio} key={anuncio.id} deleteAnuncio={deleteAnuncio} anuncios={anuncios}/>
                    ))
                }
            </div>
            <AsideGeneral/>
        </main>
    )
}