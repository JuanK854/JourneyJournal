import { useState } from 'react'

function Carrusel({ images }) {
    const [current, setCurrent] = useState(0)

    if (!images || images.length === 0) return null

    if (images.length === 1) {
        return <img className="w-full object-cover max-h-72" src={images[0].url} alt="Imagen de viaje" />
    }

    return (
        <div className="relative">
            <img
                className="w-full object-cover max-h-72"
                src={images[current].url}
                alt={`Imagen ${current + 1}`}
            />
            <button
                onClick={() => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 cursor-pointer"
            >
                ‹
            </button>
            <button
                onClick={() => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 cursor-pointer"
            >
                ›
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${i === current ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carrusel