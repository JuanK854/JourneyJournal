import { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

function RegisterForm({ onSuccess }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            const res = await fetch('http://localhost:3010/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            if (!res.ok) {
                setError(data.error || 'Error al registrarse')
                return
            }
            sessionStorage.setItem('token', data.token)
            sessionStorage.setItem('user', JSON.stringify(data.user))
            onSuccess()
        } catch {
            setError('No se pudo conectar con el servidor')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-amber-50 rounded-md shadow p-6 w-full max-w-md flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-center">Registrarse</h2>
            <Input type="text" placeholder="Nombre completo . . ." value={name} onChange={e => setName(e.target.value)} />
            <Input type="text" placeholder=""></Input>
            <Input type="text" placeholder="Correo electronico @ . . ." value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Contraseña  . . ." value={password} onChange={e => setPassword(e.target.value)} />
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