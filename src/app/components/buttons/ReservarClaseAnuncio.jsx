'use client'
export function ReservarClaseAnuncio({anuncio}){
    const id = anuncio.id
    return(
        <button 
        className="w-[130px] bg-black text-white border-black border-[1px] py-[10px] justify-center items-center rounded-[10px]"
        onClick={async ()=>{
            const res = await fetch('/api/checkout',{
                method: 'POST',
                body: JSON.stringify({
                    id
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            window.location.href = data.url
        }}
        >Reservar</button>
    )
}