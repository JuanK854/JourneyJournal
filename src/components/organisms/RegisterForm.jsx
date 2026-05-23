import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import useAuth from '../../hooks/useAuth'

function RegisterForm() {
    const { register } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            await register(name, username, email, password)
            navigate('/login')
        } catch {
            setError('Error al registrarse, intenta de nuevo')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-md flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Registrarse</h2>
            <Input type="text" placeholder="Nombre completo . . ." value={name} onChange={e => setName(e.target.value)} autoComplete="off" onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            <Input type="text" placeholder="Username . . ." value={username} onChange={e => setUsername(e.target.value)} autoComplete="off" onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            <Input type="text" placeholder="Correo electrónico @ . . ." value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            <Input type="password" placeholder="Contraseña . . ." value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                {loading ? 'Cargando...' : 'Registrarse'}
            </Button>
            <p className="text-xs text-center text-gray-500">
                ¿Ya tienes una cuenta? <a href="/login" className="text-[#ff7226] font-bold">Inicia sesión</a>
            </p>
        </div>
    )
}

export default RegisterForm