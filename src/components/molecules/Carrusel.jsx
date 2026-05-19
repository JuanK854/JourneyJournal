import { useState } from 'react'

function Carrusel({ images }) {
    const [current, setCurrent] = useState(0)

    if (!images || images.length === 0) return null

    const Imagen = ({ src }) => (
        <div className="relative w-full h-72 overflow-hidden">
            <img
                src={src}
                alt="fondo"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg opacity-60"
            />
            <img
                src={src}
                alt="Imagen de viaje"
                className="relative w-full h-full object-contain"
            />
        </div>
    )

    if (images.length === 1) return <Imagen src={images[0].url} />

    return (
        <div className="relative">
            <Imagen src={images[current].url} />
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