export function AnuncioItem({anuncio}){
    
    return(
        <div className="w-[90%] my-[20px] flex flex-col bg-white rounded-[10px] border-[1px] border-black">
            <p className="w-[90%] mx-auto mt-[10px] font-bold">{anuncio.title}</p>
            <p className="w-[90%] mx-auto">{anuncio.description.slice(0,150) + "..."} </p>
            <div className="flex flex-col sm:flex-row w-[90%] mx-auto pb-[10px] gap-[30px] mt-[20px]">
                <p><b>Categoria:</b> {anuncio.category}</p>
                <p><b>Precio:</b>{anuncio.price}€</p>
                <p><b>Nivel:</b>{anuncio.level}</p>
            </div>
        </div>
    )
}