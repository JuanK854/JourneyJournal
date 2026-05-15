import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import useAuth from '../../hooks/useAuth'

function LoginForm() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            await login(email, password)
            navigate('/home')
        } catch {
            setError('Correo o contraseña incorrectos')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-md flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Iniciar sesión</h2>
            <Input type="text" placeholder="Correo electrónico @ . . ." value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Contraseña . . ." value={password} onChange={e => setPassword(e.target.value)} />
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                {loading ? 'Cargando...' : 'Iniciar sesión'}
            </Button>
            <p className="text-xs text-center text-gray-500">
                Crea una cuenta nueva <a href="/register" className="text-[#ff7226] font-bold">Regístrate</a>
            </p>
        </div>
    )
}

export default LoginForm