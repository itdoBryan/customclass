'use client'
import { AsideGeneral} from "../components/sections/AsideGeneral"
import { MiAnuncioItem } from "../components/items/MiAnuncioItem"
import { useState } from "react"


export default function MisAnuncios(){
    const añadirAnuncio = (event)=>{
        event.preventDefault();
        const array = anuncios
        const titulo = document.getElementById("title").value
        const descripcion = document.getElementById("description").value
        const nivel = document.getElementById("level").value
        const precio = document.getElementById("price").value
        const categoria = document.getElementById("category").value

        array.push({
            title: titulo,
            description: descripcion,
            category: categoria,
            preice: precio,
            levcl: nivel,
            id: anuncios.length + 1
        })

        setAnuncios(array)
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("level").value = ""
        document.getElementById("price").value = ""
        document.getElementById("category").value = ""
        
    }
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
        {
            id: "price_1PJS13H3wmKgI5nzyc5n4V2o",
            title: "Clases de Catalan",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit maiores aperiam earum unde sequi, debitis odit eos officiis dolore quos consequatur accusantium",
            category: "Catalan",
            price: 10,
            level: "ESO",
            slug: "anuncio6",
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
            <div className="w-full sm:w-[75%] flex flex-col items-center mt-[8%] h-[500px] overflow-y-scroll no-scrollbar">
                <h1 className="font-bold text-white text-[40px]">Mis Anuncios</h1>
                {
                    anuncios.map((anuncio)=>(
                        <MiAnuncioItem anuncio={anuncio} key={anuncio.id} deleteAnuncio={deleteAnuncio} anuncios={anuncios}/>
                    ))
                }
                <h1 className="font-bold text-white text-[40px]">Añadir Anuncio</h1>
                <form className="bg-white flex flex-col w-[90%] mx-auto rounded">
                    <div className="flex flex-col w-[90%] mx-auto py-4 gap-4">
                        <div className="w-full">
                            <label className="mr-2">Titulo</label>
                            <input className="border-[2px] border-black rounded w-full" id="title"></input>
                        </div>
                        <dic>
                            <label className="mr-2">Descripción</label>
                            <input className="border-[2px] border-black rounded w-full" id="description" ></input>
                        </dic>
                        <div className="flex gap-[3%]">
                            <div className="w-[31%]">
                                <label className="mr-2">Nivel</label>
                                <input className="border-[2px] border-black rounded w-full" id="level" ></input>
                            </div>
                            <div className="w-[31%]">
                                <label className="mr-2"> Precio</label>
                                <input className="border-[2px] border-black rounded w-full" id="price"></input>
                            </div>
                            <div className="w-[32%]">
                                <label className="mr-2"> Categoria</label>
                                <input className="border-[2px] border-black rounded w-full" id="category"></input>
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-3 my-4 bg-black text-white rounded mx-auto" onClick={()=>{añadirAnuncio(event)}}>Añadir Anuncio</button>
                </form>
            </div>
            <AsideGeneral/>
        </main>
    )
}