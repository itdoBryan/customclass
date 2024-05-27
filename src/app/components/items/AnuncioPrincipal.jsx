import {ReservarClaseAnuncio} from "../buttons/ReservarClaseAnuncio"

export function AnuncioPrincipal({anuncio}){
    
    return(
        <div className="w-[85%] min-h-[500px] flex bg-white rounded items-center  overflow-scroll">
            <div className="flex flex-col w-[85%] mx-auto ">
                <h2 className="font-bold text-[20px] mb-[10px]">{anuncio.title}</h2>
                <p className="mb-[10px]">{anuncio.description}</p>
                <div className="mb-[10px]">
                    <b>{anuncio.profesor.nombre}</b>
                    <p>{anuncio.profesor.description}</p>
                </div>
                <div className="flex justify-between mb-[20px]">
                    <div>   
                        <p className="mb-[10px]"><b>Precio: </b> {anuncio.price}€</p>
                        <p><b>Materia: </b> {anuncio.category}</p>
                    </div>
                    <div>
                        <p className="mb-[10px]"><b>Nivel: </b> {anuncio.level}</p>
                        <ReservarClaseAnuncio anuncio={anuncio}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
