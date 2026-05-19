import { useState, useEffect } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import MediaPreview from '../molecules/MediaPreview'
import api from '../../services/api'

function PostForm({ onClose }) {
    const [title, setTitle] = useState(() => sessionStorage.getItem('draft_title') || '')
    const [description, setDescription] = useState(() => sessionStorage.getItem('draft_description') || '')
    const [city, setCity] = useState(() => sessionStorage.getItem('draft_city') || '')
    const [country, setCountry] = useState(() => sessionStorage.getItem('draft_country') || '')
    const [images, setImages] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        sessionStorage.setItem('draft_title', title)
        sessionStorage.setItem('draft_description', description)
        sessionStorage.setItem('draft_city', city)
        sessionStorage.setItem('draft_country', country)
    }, [title, description, city, country])

    const clearDraft = () => {
        sessionStorage.removeItem('draft_title')
        sessionStorage.removeItem('draft_description')
        sessionStorage.removeItem('draft_city')
        sessionStorage.removeItem('draft_country')
    }

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            if (city) formData.append('city', city)
            if (country) formData.append('country', country)
            images.forEach(img => formData.append('images', img))

            await api.post('/posts', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            clearDraft()
            onClose()
        } catch {
            setError('Error al crear el post, intenta de nuevo')
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        clearDraft()
        onClose()
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-xl flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Nuevo post</h2>
            <Input placeholder="Título . . ." value={title} onChange={e => setTitle(e.target.value)} className="rounded-lg" />
            <textarea
                placeholder="¿Qué pasó en este viaje? . . ."
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
                className="w-full rounded-lg px-4 py-2 text-sm bg-blue-50 border border-gray-200 outline-none focus:border-[#ff7226] resize-none"
            />
            <Input placeholder="Ciudad . . ." value={city} onChange={e => setCity(e.target.value)} className="rounded-lg" />
            <Input placeholder="País . . ." value={country} onChange={e => setCountry(e.target.value)} className="rounded-lg" />
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => setImages([...e.target.files])}
                className="text-sm text-gray-500"
            />
            <MediaPreview images={images} />
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            <Button onClick={handleSubmit} className="w-full rounded-lg" disabled={loading}>
                {loading ? 'Publicando...' : 'Publicar'}
            </Button>
            <Button variant="outline" onClick={handleClose} className="w-full">
                Cancelar
            </Button>
        </div>
    )
}

export default PostForm