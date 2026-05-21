import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Avatar from '../atoms/Avatar'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'

function SettingsForm() {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState(user?.name || '')
    const [username, setUsername] = useState(user?.username || '')
    const [bio, setBio] = useState(user?.bio || '')
    const [profilePicture, setProfilePicture] = useState(null)
    const [preview, setPreview] = useState(user?.profile_picture || null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setProfilePicture(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit = async () => {
        setError('')
        setSuccess(false)
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('username', username)
            formData.append('bio', bio)
            if (profilePicture) formData.append('profile_picture', profilePicture)

            const { data } = await api.put(`/users/${user.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            localStorage.setItem('user', JSON.stringify({
                ...user,
                name,
                username,
                bio,
                profile_picture: data.profile_picture || user.profile_picture
            }))

            setSuccess(true)
        } catch {
            setError('Error al actualizar el perfil')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-xl flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Editar perfil</h2>

            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <Avatar src={preview} size="lg" />
                    <label className="absolute bottom-0 right-0 bg-[#ff7226] text-white text-xs rounded-full px-2 py-1 cursor-pointer hover:bg-[#f4895a]">
                        ✎
                        <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 px-1">Nombre</label>
                <Input placeholder="Nombre . . ." value={name} onChange={e => setName(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 px-1">Username</label>
                <Input placeholder="Username . . ." value={username} onChange={e => setUsername(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 px-1">Bio</label>
                <textarea
                    placeholder="Bio . . ."
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    rows={3}
                    className="w-full rounded-lg px-4 py-2 text-sm bg-blue-50 border border-gray-200 outline-none focus:border-[#ff7226] resize-none"
                />
            </div>

            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            {success && <p className="text-xs text-green-500 text-center">✓ Perfil actualizado</p>}

            <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar cambios'}
            </Button>
            <Button variant="outline" onClick={() => navigate('/profile')} className="w-full">
                Cancelar
            </Button>
        </div>
    )
}

export default SettingsForm