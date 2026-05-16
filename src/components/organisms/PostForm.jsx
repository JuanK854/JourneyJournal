import { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import api from '../../services/api'

function PostForm({ onClose }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [images, setImages] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

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

            onClose()
        } catch {
            setError('Error al crear el post, intenta de nuevo')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-xl flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Nuevo post</h2>
            <Input placeholder="Título . . ." value={title} onChange={e => setTitle(e.target.value)} />
            <textarea
                placeholder="¿Qué pasó en este viaje? . . ."
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
                className="w-full rounded-2xl px-4 py-2 text-sm bg-blue-50 border border-gray-200 outline-none focus:border-[#ff7226] resize-none"
            />
            <Input placeholder="Ciudad . . ." value={city} onChange={e => setCity(e.target.value)} />
            <Input placeholder="País . . ." value={country} onChange={e => setCountry(e.target.value)} />
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => setImages([...e.target.files])}
                className="text-sm text-gray-500"
            />
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                {loading ? 'Publicando...' : 'Publicar'}
            </Button>
            <Button variant="ghost" onClick={onClose} className="w-full">
                Cancelar
            </Button>
        </div>
    )
}

export default PostForm