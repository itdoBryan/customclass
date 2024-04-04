

export function MiAnuncioItem({anuncio, deleteAnuncio, anuncios}){
    var pos = anuncios.indexOf(anuncio);
    
    return(
        <div className="w-[90%] my-[20px] flex flex-col bg-white rounded-[10px] border-[1px] border-black">
            <p className="w-[90%] mx-auto mt-[10px] font-bold">{anuncio.title}</p>
            <p className="w-[90%] mx-auto">{anuncio.description.slice(0,150) + "..."} </p>
            
            <div className="flex w-[90%] justify-between mx-auto py-[10px] items-center">
                <div className="flex flex-col sm:flex-row pb-[10px] gap-[30px] mt-[20px]">
                    <p><b>Categoria:</b> {anuncio.category}</p>
                    <p><b>Precio:</b>{anuncio.price}€</p>
                    <p><b>Nivel:</b>{anuncio.level}</p>
                </div>
                <button className="py-[5px] px-[10px] bg-black text-white rounded-[5px]" onClick={()=>deleteAnuncio(pos)}>Eliminar Anuncio</button>
            </div>
            
        </div>
    )
}